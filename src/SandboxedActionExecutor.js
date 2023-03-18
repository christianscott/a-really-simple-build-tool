// @ts-check
const { strict: assert } = require("assert");
const fs = require("fs");
const proc = require("child_process");
const path = require("path");
const { getDirs } = require("./getDirs");
const { Action } = require("./Action");

class SandboxedActionExecutor {
	static dirs = getDirs();
	static nextId = 0;

	/**
	 * @param {Action} action
	 */
	execute(action) {
		const sandboxDir = this.nextSandboxDir();

		fs.rmSync(sandboxDir, { recursive: true, force: true });
		fs.mkdirSync(sandboxDir, { recursive: true });

		// symlink inputs from the execroot into the sandbox dir
		for (const input of action.inputs) {
			fs.symlinkSync(
				path.join(SandboxedActionExecutor.dirs.execroot, input),
				path.join(sandboxDir, input),
			);
		}

		// execute the genrule
		console.error("Executing genrule for " + action.name);
		const res = proc.spawnSync(
			"bash",
			["-c", "set -euo pipefail; " + action.cmd],
			{
				stdio: "inherit",
				cwd: sandboxDir,
			},
		);
		if ((res.status ?? 0) > 0) {
			throw new Error(`'${action.cmd}' failed with code ${res.status}`);
		}

		// ensure outputs were created & symlink to the execroot
		for (const out of action.outs) {
			const absOutput = path.join(sandboxDir, out);
			assert(fs.existsSync(absOutput), "missing output");
			fs.renameSync(
				absOutput,
				path.join(SandboxedActionExecutor.dirs.execroot, out),
			);
		}
	}

	nextSandboxDir() {
		return path.join(
			SandboxedActionExecutor.dirs.execroot,
			"sandbox",
			(SandboxedActionExecutor.nextId++).toString(10),
		);
	}
}
exports.SandboxedActionExecutor = SandboxedActionExecutor;
