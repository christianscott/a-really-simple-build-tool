import { strict as assert } from "assert";
import * as fs from "fs";
import * as jsYAML from "js-yaml";
import * as path from "path";
import { DiGraph } from "./DiGraph";
import { must } from "./must";
import { Action } from "./Action";
import { SandboxedActionExecutor } from "./SandboxedActionExecutor";
import { Task } from "./Task";
import { ConcurrencyLimiter } from "./ConcurrencyLimiter";
import { getDirs } from "./dirs";

const mode = {
	build: 0,
	info: 1,
};

function parseCliArgs(argsWithBin = process.argv) {
	const filenameArgIdx = argsWithBin.findIndex((arg) => arg === __filename);
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
	const config_ = jsYAML.load(
		fs.readFileSync("./build.yaml", { encoding: "utf-8" }),
	);
	const config: {
		[key: string]: {
			rule: string;
			cmd: string;
			srcs?: string[];
			outs?: string[];
		};
	} = config_;

	const inputFiles = new Set<string>();
	for (const dirent of fs.readdirSync(dirs.workspace)) {
		if (dirent === "build.yaml") {
			continue;
		}
		const stat = fs.statSync(dirent);
		if (!stat.isDirectory()) {
			inputFiles.add(makeLabel(pkg, dirent));
		}
	}

	// used to verify that labels exist
	const targets: Set<string> = new Set();
	// collect target names
	for (const name of Object.keys(config)) {
		targets.add(makeLabel(pkg, name));
	}

	// assosciate files with targets
	// used to find the target that is responsible for creating a file
	const outputFiles: Map<string, string> = new Map();
	for (const [name, { outs = [] }] of Object.entries(config)) {
		for (const out of outs) {
			outputFiles.set(makeLabel(pkg, out), makeLabel(pkg, name));
		}
	}

	// list of labels to build
	const resolvedLabelsToBuild = [];
	for (let labelToBuild of args.targetsToBuild) {
		if (!labelToBuild.startsWith("//")) {
			labelToBuild = `//${labelToBuild}`;
		}
		if (targets.has(labelToBuild)) {
			resolvedLabelsToBuild.push(labelToBuild);
			continue;
		}
		if (outputFiles.has(labelToBuild)) {
			resolvedLabelsToBuild.push(must(outputFiles.get(labelToBuild)));
			continue;
		}
		// TODO: special error for trying to build inputs
		throw new Error(`could not resolve target ${labelToBuild}`);
	}

	fs.mkdirSync(dirs.execroot, { recursive: true });

	// build up the graph
	const actions: Map<string, Action> = new Map();
	// label to label graph
	const graph = new DiGraph();
	for (const [name, conf] of Object.entries(config)) {
		const label = makeLabel(pkg, name);
		const { srcs = [] } = conf;
		const inputFileSrcs = [];
		for (const src of srcs) {
			const normalizedLabel = normalizeLabel(src);
			if (inputFiles.has(normalizedLabel)) {
				const filepath = normalizedLabel.replace(/^\/\//, "").replace(/^:/, "");
				fs.symlinkSync(
					path.join(dirs.workspace, filepath),
					path.join(dirs.execroot, filepath),
				);
				inputFileSrcs.push(filepath);
				continue;
			}
			graph.insert(label, normalizedLabel);
		}
		actions.set(
			label,
			new Action(name, conf.outs ?? [], conf.cmd, inputFileSrcs),
		);
	}
	assert(!graph.isCyclic(), "build graph must not be cyclic");

	const transitiveDeps = graph.walk(...resolvedLabelsToBuild);
	const ordering = graph.subGraph(transitiveDeps).topoSort();

	const limiter = new ConcurrencyLimiter(args.jobs);
	const executor = new SandboxedActionExecutor(dirs);
	const tasks: Map<string, Task> = new Map();
	for (const label of ordering) {
		const action = must(
			actions.get(label),
			`could not find corresponding action for ${label}`,
		);
		const deps = graph.edges.get(label);
		for (const dep of deps) {
			const depAction = must(actions.get(dep));
			// TODO: filter outputs that are not specified as inputs
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

	function normalizeLabel(label: string): string {
		if (!label.startsWith(":")) {
			throw new Error("unimplemented");
		}

		const fullLabel = "//" + pkg + label;
		if (targets.has(fullLabel)) {
			return fullLabel;
		}

		const target = outputFiles.get(fullLabel);
		if (target != null) {
			return target;
		}

		if (inputFiles.has(fullLabel)) {
			return fullLabel;
		}

		throw new Error(`could not resolve label ${label}`);
	}
}

/**
 * @param {string} pkg
 * @param {string} name
 * @returns {string}
 */
function makeLabel(pkg: string, name: string): string {
	return `//${pkg}:${name}`;
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});
