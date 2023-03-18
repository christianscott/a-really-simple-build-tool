// @ts-check
const { strict: assert } = require("assert");
const fs = require("fs");
const yaml = require("js-yaml");
const { DiGraph } = require("./DiGraph");
const { must } = require("./must");
const { Action } = require("./Action");

function main() {
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

	const ordering = graph.topoSort();
	for (const label of ordering) {
		const action = must(actions.get(label));
		const deps = graph.edges.get(label);
		for (const dep of deps) {
			const depAction = must(actions.get(dep));
			action.addInputs(depAction.outputs());
		}
		action.execute();
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
