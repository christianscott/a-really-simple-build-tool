export type Try<T, E> = Success<T> | Failure<E>;

export const Try = {
	Success<T>(x: T): Success<T> { return new Success(x); },
	Failure<E>(x: E): Failure<E> { return new Failure(x); },
};

interface _Try<T, E> {
	readonly ok: boolean;
	then<U>(f: (x: T) => U): Try<U, E>;
	orElse<F>(f: (x: E) => F): Try<T, F>;
}

class Success<T> implements _Try<T, never> {
	readonly ok = true;
	constructor(readonly val: T) { }
	then<U>(f: (x: T) => U): Try<U, never> {
		return Try.Success(f(this.val));
	}
	orElse<F>(_f: (x: never) => F): Try<T, F> {
		return this;
	}
}

class Failure<E> implements _Try<never, E> {
	readonly ok = false;
	constructor(readonly err: E) { }
	then<U>(_f: (x: never) => U): Try<U, E> {
		return this;
	}
	orElse<F>(f: (x: E) => F): Try<never, F> {
		return Try.Failure(f(this.err));
	}
}
