export function stringJoin<T extends readonly string[], S extends string = ",">(
	strings: T,
	separator: S,
): Join<T, S> {
	return strings.join(separator) as Join<T, S>;
}

type Join<T extends readonly string[], S extends string> = T extends readonly [infer F, ...infer R]
	? F extends string
		? R extends readonly string[]
			? `${F}${R["length"] extends 0 ? "" : `${S}${Join<R, S>}`}`
			: never
		: never
	: "";

// Example usage:
const result = stringJoin(["hello", "world"] as const, "|");
type ResultType = typeof result; // "hello world"
