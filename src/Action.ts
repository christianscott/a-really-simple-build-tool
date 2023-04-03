import { createHash } from "crypto";

export class Action {
	constructor(
		readonly name: string,
		readonly srcs: string[],
		readonly outs: string[],
		readonly cmd: string,
		readonly inputs: string[] = [],
	) {}
	addInputs(inputs: string[]) {
		this.inputs.push(...inputs);
	}
	key() {
		const hasher = createHash("sha256");
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
	outputs() {
		return this.outs;
	}
}

function dbg<T>(v: T): T {
	console.error(v);
	return v;
}
