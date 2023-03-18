//@ts-check
const { strict: assert } = require("assert");
const crypto = require("crypto");
const fs = require("fs");
const proc = require("child_process");
const path = require("path");
const { getDirs } = require("./getDirs");

class Action {
	static dirs = getDirs();
	static nextId = 0;
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
		this.sandboxDir = path.join(
			Action.dirs.execroot,
			"sandbox",
			(Action.nextId++).toString(10),
		);
		this.inputs = [];
	}
	/**
	 * @typedef {{ filename: string, realPath: string }} Output
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
	execute() {
		fs.rmSync(this.sandboxDir, { recursive: true, force: true });
		fs.mkdirSync(this.sandboxDir, { recursive: true });

		for (const input of this.inputs) {
			fs.symlinkSync(
				input.realPath,
				path.join(this.sandboxDir, input.filename),
			);
		}

		console.error("Executing genrule for " + this.name);
		proc.spawnSync("bash", ["-c", "set -euo pipefail; " + this.cmd], {
			stdio: "inherit",
			cwd: this.sandboxDir,
		});
		for (const out of this.outs) {
			assert(fs.existsSync(path.join(this.sandboxDir, out)), "missing output");
		}
	}
	/**
	 * @returns {readonly Output[]}
	 */
	outputs() {
		const outputs = [];
		for (const output of this.outs) {
			outputs.push({
				filename: output,
				realPath: path.join(this.sandboxDir, output),
			});
		}
		return outputs;
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
