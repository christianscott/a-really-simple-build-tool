const { strict: assert } = require("assert");
const crypto = require("crypto");
const path = require("path");
const { must } = require("./must");

function getDirs() {
	const workspace = process.cwd();
	const outputRoot = path.join("/", "private", "var", "tmp");
	const outputUserRoot = path.join(
		outputRoot,
		`_bazel_${must(process.env.USER)}`,
	);
	const workspaceDirHash = crypto
		.createHash("md5")
		.update(workspace)
		.digest("hex");
	const outputBase = path.join(outputUserRoot, workspaceDirHash);
	const execroot = path.join(outputBase, "execroot");
	return {
		workspace,
		outputRoot,
		outputUserRoot,
		outputBase,
		execroot,
	};
}
exports.getDirs = getDirs;
