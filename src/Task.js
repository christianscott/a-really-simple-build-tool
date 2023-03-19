// @ts-check

export class Task {
	/**
	 * @param {{ run: () => Promise<void>, deps: Task[], limiter: import('./ConcurrencyLimiter').ConcurrencyLimiter }} opts
	 */
	constructor({ run, deps, limiter }) {
		this._run = run;
		this.deps = deps;
		this.limiter = limiter;
		this.resolve = () => {};
		/** @type {Promise<void>} */
		this.finished = new Promise((resolve) => {
			this.resolve = resolve;
		});
	}
	async run() {
		for (const task of this.deps) {
			await task.finished;
		}
		await this.limiter.run(this._run);
		this.resolve();
	}
}
