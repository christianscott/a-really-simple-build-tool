export class ConcurrencyLimiter {
	queue = [];
	count = 0;

	constructor(limit) {
		this.limit = limit;
	}

	run(task) {
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
