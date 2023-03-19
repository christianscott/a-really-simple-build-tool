// @ts-check

const childProc = require("child_process");

/** @returns {Promise<void>} */
function exec({ cmd, args, opts }) {
	const proc = childProc.spawn(cmd, args, opts);
	return new Promise((resolve, reject) => {
		proc.on("close", (code) => {
			code === 0 ? resolve() : reject();
		});
		proc.on("error", (err) => reject(err));
	});
}
exports.exec = exec;
