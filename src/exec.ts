import { spawn } from "child_process";
import type { SpawnOptions } from "child_process";

export function exec({
	cmd,
	args,
	opts,
}: {
	cmd: string;
	args: string[];
	opts: SpawnOptions;
}): Promise<void> {
	const proc = spawn(cmd, args, opts);
	return new Promise((resolve, reject) => {
		proc.on("close", (code) => {
			code === 0 ? resolve() : reject();
		});
		proc.on("error", (err) => reject(err));
	});
}
