// @ts-check
const { strict: assert } = require("assert");
const fs = require("fs");
const path = require("path");
const { Action } = require("./Action");
const { exec } = require("./exec");

class SandboxedActionExecutor {
	static nextId = 0;

	constructor(dirs) {
		this.dirs = dirs;
	}

	/**
	 * @param {Action} action
	 */
	async execute(action) {
		const sandboxDir = this.nextSandboxDir();

		await fs.promises.mkdir(sandboxDir, { recursive: true });

		// symlink inputs from the execroot into the sandbox dir
		for (const input of action.inputs) {
			await fs.promises.symlink(
				path.join(this.dirs.execroot, input),
				path.join(sandboxDir, input),
			);
		}

		// execute the genrule
		console.error("Executing genrule for " + action.name);
		await exec({
			cmd: "bash",
			args: ["-c", "set -euo pipefail; " + action.cmd],
			opts: {
				stdio: "inherit",
				cwd: sandboxDir,
			},
		});

		// ensure outputs were created & symlink to the execroot
		for (const out of action.outs) {
			const absOutput = path.join(sandboxDir, out);
			assert(fs.existsSync(absOutput), "missing output");
			await fs.promises.rename(absOutput, path.join(this.dirs.execroot, out));
		}

		await fs.promises.rm(sandboxDir, { recursive: true, force: true });
	}

	nextSandboxDir() {
		return path.join(
			this.dirs.execroot,
			"sandbox",
			(SandboxedActionExecutor.nextId++).toString(10),
		);
	}
}
exports.SandboxedActionExecutor = SandboxedActionExecutor;
