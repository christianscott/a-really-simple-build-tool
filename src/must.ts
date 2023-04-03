import { strict as assert } from "assert";

export function must<T>(
	x: T | undefined | null,
	msg: string = "x does not exist",
): T {
	assert(x != null, msg);
	return x;
}
