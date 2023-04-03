import type { ConcurrencyLimiter } from "./ConcurrencyLimiter";

export class Task {
	private readonly _run: () => Promise<void>;
	private readonly deps: Task[];
	private readonly limiter: ConcurrencyLimiter;
	private resolve: () => void;
	private readonly finished: Promise<void>;

	constructor({
		run,
		deps,
		limiter,
	}: {
		run(): Promise<void>;
		deps: Task[];
		limiter: ConcurrencyLimiter;
	}) {
		this._run = run;
		this.deps = deps;
		this.limiter = limiter;
		this.resolve = () => {};
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
