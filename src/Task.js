// @ts-check

class Task {
	/**
	 * @param {{ run: () => Promise<void>, deps: Task[] }} opts
	 */
	constructor({ run, deps }) {
		this._run = run;
		this.deps = deps;
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
		await this._run();
		this.resolve();
	}
}
exports.Task = Task;
