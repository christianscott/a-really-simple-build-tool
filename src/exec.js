// @ts-check

import { spawn } from "child_process";

/** @returns {Promise<void>} */
export function exec({ cmd, args, opts }) {
	const proc = spawn(cmd, args, opts);
	return new Promise((resolve, reject) => {
		proc.on("close", (code) => {
			code === 0 ? resolve() : reject();
		});
		proc.on("error", (err) => reject(err));
	});
}
