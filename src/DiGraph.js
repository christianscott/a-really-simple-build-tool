//@ts-check

import { strict as assert } from "assert";
import { must } from "./must.js";

export class DiGraph {
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
	/**
	 * @param  {...string} entrypoints
	 * @returns {Set<string>}
	 */
	walk(...entrypoints) {
		const seen = new Set();
		// const toVisit = entrypoints;
		while (entrypoints.length > 0) {
			const next = entrypoints.shift();
			seen.add(next);
			for (const dep of this.edges.get(next)) {
				if (!seen.has(dep)) {
					entrypoints.push(dep);
				}
			}
		}
		return seen;
	}
	/**
	 * @param {Set<string>} keep
	 * @returns {DiGraph}
	 */
	subGraph(keep) {
		const subGraph = new DiGraph();
		for (const [node, deps] of this.edges) {
			if (keep.has(node)) {
				for (const dep of deps) {
					keep.has(dep) && subGraph.insert(node, dep);
				}
			}
		}
		for (const k of keep) {
			subGraph.edges.get(k);
		}
		return subGraph;
	}
}

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
