import { strict as assert } from "assert";

/**
 * @template T
 * @param {T | undefined | null} x
 * @returns {T}
 */
export function must(x) {
	assert(x != null, "x does not exist");
	return x;
}
