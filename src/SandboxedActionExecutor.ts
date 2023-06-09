import { strict as assert } from "assert";
import { promises as fs, existsSync } from "fs";
import { join } from "path";
import { Action } from "./Action";
import { exec } from "./exec";
import { Dirs } from "./dirs";

export class SandboxedActionExecutor {
	static nextId = 0;

	constructor(private readonly dirs: Dirs) {}

	/**
	 * @param {Action} action
	 */
	async execute(action: Action) {
		const sandboxDir = this.nextSandboxDir();

		await fs.mkdir(sandboxDir, { recursive: true });

		// symlink inputs from the execroot into the sandbox dir
		for (const input of action.inputs) {
			await fs.symlink(
				join(this.dirs.execroot, input),
				join(sandboxDir, input),
			);
		}

		// execute the genrule
		console.error("Executing genrule for " + action.name);
		let cmd = [`set -euo pipefail`];
		if (action.outs.length === 1) {
			cmd.push(`out() { echo ${action.outs[0]}; }`);
		}
		cmd.push(action.cmd);
		await exec({
			cmd: "bash",
			args: ["-c", cmd.join("\n")],
			opts: {
				stdio: "inherit",
				cwd: sandboxDir,
			},
		});

		// ensure outputs were created & symlink to the execroot
		for (const out of action.outs) {
			const absOutput = join(sandboxDir, out);
			assert(existsSync(absOutput), `output ${out} was not created`);
			await fs.rename(absOutput, join(this.dirs.execroot, out));
		}

		await fs.rm(sandboxDir, { recursive: true, force: true });
	}

	nextSandboxDir() {
		return join(
			this.dirs.execroot,
			"sandbox",
			(SandboxedActionExecutor.nextId++).toString(10),
		);
	}
}
