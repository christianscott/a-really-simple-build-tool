//@ts-check
const crypto = require("crypto");

class Action {
	/**
	 * @param {string} name
	 * @param {string[]} srcs
	 * @param {string[]} outs
	 * @param {string} cmd
	 */
	constructor(name, srcs, outs, cmd) {
		this.name = name;
		this.srcs = srcs;
		this.outs = outs;
		this.cmd = cmd;
		/** @type {string[]} */
		this.inputs = [];
	}
	/**
	 * @typedef {string} Output
	 * @param {readonly Output[]} inputs
	 */
	addInputs(inputs) {
		this.inputs.push(...inputs);
	}
	hash() {
		const hasher = crypto.createHash("sha256");
		hasher.update(this.name);
		for (const src of this.srcs) {
			hasher.update(src);
		}
		for (const out of this.outs) {
			hasher.update(out);
		}
		hasher.update(this.cmd);
		return dbg(hasher.digest().toString("hex"));
	}
	outputs() {
		return this.outs;
	}
}
exports.Action = Action;

/**
 * @template T
 * @param {T} v
 * @returns {T}
 */
function dbg(v) {
	console.error(v);
	return v;
}
