// @ts-check
import { strict as assert } from "assert";
import { promises, existsSync } from "fs";
import { join } from "path";
import { Action } from "./Action.js";
import { exec } from "./exec.js";

export class SandboxedActionExecutor {
	static nextId = 0;

	constructor(dirs) {
		this.dirs = dirs;
	}

	/**
	 * @param {Action} action
	 */
	async execute(action) {
		const sandboxDir = this.nextSandboxDir();

		await promises.mkdir(sandboxDir, { recursive: true });

		// symlink inputs from the execroot into the sandbox dir
		for (const input of action.inputs) {
			await promises.symlink(
				join(this.dirs.execroot, input),
				join(sandboxDir, input),
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
			const absOutput = join(sandboxDir, out);
			assert(existsSync(absOutput), "missing output");
			await promises.rename(absOutput, join(this.dirs.execroot, out));
		}

		await promises.rm(sandboxDir, { recursive: true, force: true });
	}

	nextSandboxDir() {
		return join(
			this.dirs.execroot,
			"sandbox",
			(SandboxedActionExecutor.nextId++).toString(10),
		);
	}
}
