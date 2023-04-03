export class ConcurrencyLimiter {
	private readonly queue: (() => Promise<void>)[] = [];
	private count = 0;

	constructor(private readonly limit: number) {}

	run(task: { (): Promise<void>; (): unknown }) {
		return new Promise((resolve, reject) => {
			this.queue.push(async () => {
				this.count++;
				try {
					resolve(await task());
				} catch (e) {
					reject(e);
				}
				this.count--;
				this.handleQueue();
			});
			this.handleQueue();
		});
	}

	handleQueue() {
		while (this.count < this.limit && this.queue.length > 0) {
			this.queue.shift()?.();
		}
	}
}
