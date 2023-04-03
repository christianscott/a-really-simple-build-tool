import * as crypto from "crypto";
import * as path from "path";
import { must } from "./must";

export type Dirs = {
	workspace: string,
	outputRoot: string,
	outputUserRoot: string,
	outputBase: string,
	execroot: string,
};

export function getDirs(): Dirs {
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
