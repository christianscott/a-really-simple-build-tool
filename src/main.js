// @ts-check
const { strict: assert } = require("assert");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const { DiGraph } = require("./DiGraph");
const { must } = require("./must");
const { Action } = require("./Action");
const { SandboxedActionExecutor } = require("./SandboxedActionExecutor");

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
		case "build":
			return { mode: mode.build, targets: rest };
		case "info":
			return { mode: mode.info };
		default:
			throw new Error(`unrecognized mode '${modeS}'`);
	}
}

function main() {
	const dirs = getDirs();
	const args = parseCliArgs(process.argv);

	if (args.mode === mode.info) {
		console.log(`execroot: ${dirs.execroot}`);
		console.log(`workspace: ${process.cwd()}`);
		return;
	}
	assert(args.mode === mode.build);

	const package = "";
	/** @type {any} */
	const config_ = yaml.load(
		fs.readFileSync("./build.yaml", { encoding: "utf-8" }),
	);
	/** @type {{ [key: string]: { rule: string, cmd: string, srcs?: string[], outs?: string[] } }} */
	const config = config_;

	/** @type {Set<string>} */
	const targets = new Set();
	// collect target names
	for (const name of Object.keys(config)) {
		targets.add(makeLabel(package, name));
	}

	// assosciate files with targets
	/** @type {Map<string, string>} */
	const files = new Map();
	for (const [name, { outs = [] }] of Object.entries(config)) {
		for (const out of outs) {
			files.set(makeLabel(package, out), makeLabel(package, name));
		}
	}

	// build up the graph
	/** @type {Map<string, Action>} */
	const actions = new Map();
	const graph = new DiGraph();
	for (const [name, conf] of Object.entries(config)) {
		const label = makeLabel(package, name);
		const { srcs = [] } = conf;
		for (const src of srcs) {
			graph.insert(label, getTargetForLabel(src));
		}
		actions.set(label, new Action(name, [], conf.outs ?? [], conf.cmd));
	}
	assert(!graph.isCyclic(), "build graph must not be cyclic");

	const executor = new SandboxedActionExecutor(dirs);
	const ordering = graph.topoSort();
	for (const label of ordering) {
		const action = must(actions.get(label));
		const deps = graph.edges.get(label);
		for (const dep of deps) {
			const depAction = must(actions.get(dep));
			action.addInputs(depAction.outputs());
		}
		executor.execute(action);
	}

	/**
	 * @param {string} label
	 * @returns {string}
	 */
	function getTargetForLabel(label) {
		if (!label.startsWith(":")) {
			throw new Error("unimplemented");
		}
		const fullLabel = "//" + package + label;
		if (targets.has(fullLabel)) {
			return fullLabel;
		}
		const target = files.get(fullLabel);
		assert(target != null);
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
 * @param {string} package
 * @param {string} name
 * @returns {string}
 */
function makeLabel(package, name) {
	return `//${package}:${name}`;
}

/**
 * @param {string} label
 * @param {string} package
 * @returns {{name: string, package: string}}
 */
function parseLabel(label, package) {
	if (label.startsWith("//")) {
		const [package, name] = label.slice(2).split(":");
		return { package, name };
	} else {
		assert(label.startsWith(":"), "relative labels must start with :");
		return { package, name: label.slice(1) };
	}
}

main();
