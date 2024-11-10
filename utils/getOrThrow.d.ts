export declare function getOrThrow<T>(item: Error | NonNullable<T>): T;

export declare function getOrThrow<T>(item: T | null | undefined, error: Error | string | (() => Error | string)): T;
