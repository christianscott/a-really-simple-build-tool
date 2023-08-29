import { Try } from './try';

export interface Descriptor<T> {
    check(x: unknown): Try<T, ParseError>;
}

interface ParseError {
    toString(): string;
}

export function parse<T>(d: Descriptor<T>, x: unknown): T {
    const res = d.check(x);
    if (!res.ok) {
        throw new Error(res.err.toString());
    }
    return res.val;
}

const _string: Descriptor<string> = {
    check(x): Try<string, ParseError> {
        if (typeof x !== 'string') {
            return Try.Failure(`expected string, got ${typeof x}`);
        }
        return Try.Success(x);
    }
};

export const t = {
    string: _string,
    optional<T>(ty: Descriptor<T>): Descriptor<T | undefined> {
        return {
            check(x) {
                if (x == null) {
                    return Try.Success(undefined);
                }
                return ty.check(x);
            }
        };
    },
    struct<S extends Record<string, unknown>>(ty: { [K in keyof S]: Descriptor<S[K]> }): Descriptor<S> {
        const keys = Object.keys(ty);
        return {
            check(x) {
                if (x == null || typeof x !== 'object') {
                    return Try.Failure(`expected object, got ${typeof x}`);
                }
                for (const key of keys) {
                    const res = ty[key].check((x as any)[key]);
                    if (!res.ok) {
                        return res;
                    }
                }
                return Try.Success(x as S);
            }
        }
    },
    dict<T>(ty: Descriptor<T>): Descriptor<Record<string, T>> {
        return {
            check(x) {
                if (x == null || typeof x !== 'object') {
                    return Try.Failure(`expected object, got ${typeof x}`);
                }
                for (const [key, val] of Object.entries(x)) {
                    const keyRes = t.string.check(key);
                    if (!keyRes.ok) {
                        return keyRes;
                    }
                    const valRes = ty.check(val);
                    if (!valRes.ok) {
                        return valRes;
                    }
                }
                return Try.Success(x as Record<string, T>);
            }
        }
    },
    array<T>(ty: Descriptor<T>): Descriptor<T[]> {
        return {
            check(x) {
                if (!Array.isArray(x)) {
                    return Try.Failure(`expected array, got ${typeof x}`);
                }
                for (const xx of x) {
                    const eltRes = ty.check(xx);
                    if (!eltRes.ok) {
                        return eltRes;
                    }
                }
                return Try.Success(x as T[]);
            }
        }
    }
}
