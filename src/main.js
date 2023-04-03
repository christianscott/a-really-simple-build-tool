// @ts-check
import * as url from "url";
import { strict as assert } from "assert";
import * as crypto from "crypto";
import * as fs from "fs";
import * as path from "path";
import * as jsYAML from "js-yaml";
import { DiGraph } from "./DiGraph.js";
import { must } from "./must.js";
import { Action } from "./Action.js";
import { SandboxedActionExecutor } from "./SandboxedActionExecutor.js";
import { Task } from "./Task.js";
import { ConcurrencyLimiter } from "./ConcurrencyLimiter.js";

const mode = {
	build: 0,
	info: 1,
};

function parseCliArgs(argsWithBin = process.argv) {
	const filenameArgIdx = argsWithBin.findIndex(
		(arg) => arg === url.fileURLToPath(import.meta.url),
	);
	if (filenameArgIdx < 0) {
		throw new Error("could not parse args");
	}
	const argsNoBin = argsWithBin.slice(filenameArgIdx + 1);
	if (argsNoBin.length === 0) {
		throw new Error("not enough arguments. usage: $bazel [build|info] ...");
	}
	const [modeS, ...rest] = argsNoBin;
	switch (modeS) {
		case "build": {
			const targetsToBuild = [];
			let jobs = 8;
			for (let i = 0; i < rest.length; i++) {
				const arg = rest[i];
				if (arg === "--jobs" || arg === "-j") {
					const jobsS = must(rest[++i]);
					jobs = parseInt(jobsS, 10);
				} else {
					targetsToBuild.push(arg);
				}
			}
			return { mode: mode.build, targetsToBuild: targetsToBuild, jobs };
		}
		case "info":
			return { mode: mode.info };
		default:
			throw new Error(`unrecognized mode '${modeS}'`);
	}
}

async function main() {
	const dirs = getDirs();
	const args = parseCliArgs(process.argv);

	if (args.mode === mode.info) {
		console.log(`execroot: ${dirs.execroot}`);
		console.log(`workspace: ${process.cwd()}`);
		return;
	}
	assert(args.mode === mode.build);
	assert(
		args.targetsToBuild != null && args.targetsToBuild.length > 0,
		"missing targets to build",
	);

	const pkg = "";
	/** @type {any} */
	const config_ = jsYAML.load(
		fs.readFileSync("./build.yaml", { encoding: "utf-8" }),
	);
	/** @type {{ [key: string]: { rule: string, cmd: string, srcs?: string[], outs?: string[] } }} */
	const config = config_;

	/** @type {Set<string>} */
	const targets = new Set();
	// collect target names
	for (const name of Object.keys(config)) {
		targets.add(makeLabel(pkg, name));
	}

	// assosciate files with targets
	/** @type {Map<string, string>} */
	const files = new Map();
	for (const [name, { outs = [] }] of Object.entries(config)) {
		for (const out of outs) {
			files.set(makeLabel(pkg, out), makeLabel(pkg, name));
		}
	}

	const resolvedTargetsToBuild = [];
	for (let targetToBuild of args.targetsToBuild) {
		if (!targetToBuild.startsWith("//")) {
			targetToBuild = `//${targetToBuild}`;
		}
		if (targets.has(targetToBuild)) {
			resolvedTargetsToBuild.push(targetToBuild);
			continue;
		}
		if (files.has(targetToBuild)) {
			resolvedTargetsToBuild.push(must(files.get(targetToBuild)));
			continue;
		}
		throw new Error(`could not resolve target ${targetToBuild}`);
	}

	// build up the graph
	/** @type {Map<string, Action>} */
	const actions = new Map();
	const graph = new DiGraph();
	for (const [name, conf] of Object.entries(config)) {
		const label = makeLabel(pkg, name);
		const { srcs = [] } = conf;
		for (const src of srcs) {
			graph.insert(label, getTargetForLabel(src));
		}
		actions.set(label, new Action(name, [], conf.outs ?? [], conf.cmd));
	}
	assert(!graph.isCyclic(), "build graph must not be cyclic");

	const transitiveDeps = graph.walk(...resolvedTargetsToBuild);
	const ordering = graph.subGraph(transitiveDeps).topoSort();

	const limiter = new ConcurrencyLimiter(args.jobs);
	const executor = new SandboxedActionExecutor(dirs);
	/** @type {Map<string, Task>} */
	const tasks = new Map();
	for (const label of ordering) {
		const action = must(actions.get(label));
		const deps = graph.edges.get(label);
		for (const dep of deps) {
			const depAction = must(actions.get(dep));
			action.addInputs(depAction.outputs());
		}
		const depTasks = [...deps].map((dep) => must(tasks.get(dep)));
		const task = new Task({
			run: () => executor.execute(action),
			deps: depTasks,
			limiter: limiter,
		});
		tasks.set(label, task);
	}
	await Promise.all([...tasks.values()].map((task) => task.run()));

	/**
	 * @param {string} label
	 * @returns {string}
	 */
	function getTargetForLabel(label) {
		if (!label.startsWith(":")) {
			throw new Error("unimplemented");
		}
		const fullLabel = "//" + pkg + label;
		if (targets.has(fullLabel)) {
			return fullLabel;
		}
		const target = files.get(fullLabel);
		assert(target != null, `could not resolve target ${label}`);
		return target;
	}
}

function getDirs() {
	const workspace = process.cwd();
	const outputRoot = path.join("/", "private", "var", "tmp");
	const outputUserRoot = path.join(
		outputRoot,
		`_bazel_${must(process.env.USER)}`,
	);
	const workspaceDirHash = crypto
		.createHash("md5")
		.update(workspace)
		.digest("hex");
	const outputBase = path.join(outputUserRoot, workspaceDirHash);
	const execroot = path.join(outputBase, "execroot");
	return {
		workspace,
		outputRoot,
		outputUserRoot,
		outputBase,
		execroot,
	};
}

/**
 * @param {string} pkg
 * @param {string} name
 * @returns {string}
 */
function makeLabel(pkg, name) {
	return `//${pkg}:${name}`;
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});
