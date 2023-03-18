const { strict: assert } = require("assert");

/**
 * @template T
 * @param {T | undefined | null} x
 * @returns {T}
 */
function must(x) {
	assert(x != null, "x does not exist");
	return x;
}
exports.must = must;
