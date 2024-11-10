import { match, P } from "ts-pattern";

import { cleanEmptyNewlines } from "./cleanEmptyNewlines";

export function getTextFromExceptionOrThrow(error: unknown): string {
	const makeMessage = (name: string, message: string) =>
		`[${name}] ${cleanEmptyNewlines(message)}${match(error)
			.with(
				{ cause: P.select(P.union(P.string, P.instanceOf(Error))) },
				(error) => `\n${getTextFromExceptionOrThrow(error)}`,
			)
			.otherwise(() => "")}`;

	return match(error)
		.with(P.instanceOf(Error), (error) => makeMessage(error.name, `${error.message}`))
		.with(P.string, (error) => makeMessage("Unnamed", error))
		.otherwise((error) =>
			makeMessage(`Unknown error type "${typeof error}"`, JSON.stringify(error, null, 2)),
		);
}
