const { strict: assert } = require("assert");
const { must } = require("./must");

class DiGraph {
	edges = new DefaultMap(() => new Set());
	insert(frm, to) {
		this.edges.get(frm).add(to);
	}
	isCyclic() {
		const seenOnAllWalks = new Set();
		for (const node of this.edges.keys()) {
			if (seenOnAllWalks.has(node)) {
				continue;
			}
			const seenOnThisWalk = new Set();
			const toVisit = [...this.edges.get(node)];
			while (toVisit.length > 0) {
				const nextNode = toVisit.shift();
				if (seenOnThisWalk.has(nextNode)) {
					return true; // cyclic
				}
				seenOnThisWalk.add(nextNode);
				const nextNodeChildren = this.edges.get(nextNode);
				nextNodeChildren && toVisit.push(...nextNodeChildren);
			}
			for (const seen of seenOnThisWalk) {
				seenOnAllWalks.add(seen);
			}
		}
		return false;
	}
	indegrees() {
		const inDegrees = new Map();
		for (const [node, neighbours] of this.edges.entries()) {
			if (!inDegrees.has(node)) {
				inDegrees.set(node, 0);
			}
			for (const neighbour of neighbours) {
				const count = inDegrees.get(neighbour) || 0;
				inDegrees.set(neighbour, count + 1);
			}
		}
		return inDegrees;
	}
	topoSort() {
		const inDegrees = this.indegrees();
		const sources = [];
		for (const [node, count] of inDegrees.entries()) {
			if (count === 0) {
				sources.push(node);
			}
		}
		assert(
			sources.length > 0,
			`a DAG must have at least one source (a node with an in-degree of 0)`,
		);
		const topologicalOrdering = [];
		while (sources.length > 0) {
			const node = sources.pop();
			topologicalOrdering.push(node);
			const neighbours = this.edges.get(node) || new Set();
			for (const neighbour of neighbours) {
				const neighbourIndegree = inDegrees.get(neighbour) - 1;
				inDegrees.set(neighbour, neighbourIndegree);
				if (neighbourIndegree === 0) {
					sources.push(neighbour);
				}
			}
		}
		assert(
			topologicalOrdering.length === this.edges.size,
			`Graph has a cycle! No topological ordering exists.`,
		);
		return topologicalOrdering.reverse();
	}
}
exports.DiGraph = DiGraph;

/**
 * @template K
 * @template V
 * @extends {Map<K, V>}
 */
class DefaultMap extends Map {
	/**
	 * @param {() => V} make
	 */
	constructor(make) {
		super();
		this.make = make;
	}
	/**
	 *
	 * @param {K} k
	 * @returns {V}
	 */
	get(k) {
		if (this.has(k)) {
			return must(super.get(k));
		} else {
			const v = this.make();
			super.set(k, v);
			return v;
		}
	}
}
