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
	execute() {
		fs.rmSync(this.sandboxDir, { recursive: true, force: true });
		fs.mkdirSync(this.sandboxDir, { recursive: true });

		// symlink inputs from the execroot into the sandbox dir
		for (const input of this.inputs) {
			fs.symlinkSync(
				path.join(Action.dirs.execroot, input),
				path.join(this.sandboxDir, input),
			);
		}

		// execute the genrule
		console.error("Executing genrule for " + this.name);
		proc.spawnSync("bash", ["-c", "set -euo pipefail; " + this.cmd], {
			stdio: "inherit",
			cwd: this.sandboxDir,
		});

		// ensure outputs were created & symlink to the execroot
		for (const out of this.outs) {
			const absOutput = path.join(this.sandboxDir, out);
			assert(fs.existsSync(absOutput), "missing output");
			fs.renameSync(absOutput, path.join(Action.dirs.execroot, out));
		}
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
