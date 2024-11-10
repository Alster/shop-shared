import { match, P } from "ts-pattern";

import { pipe } from "@/shop-shared/utils/pipe";

import { cleanEmptyNewlines } from "./cleanEmptyNewlines";
import { getTextFromExceptionOrThrow } from "./getTextFromExceptionOrThrow";

export function getErrorWithStack(
	error: unknown,
	prefix?: string,
): [message: string, stack: string | void] {
	const message = getTextFromExceptionOrThrow(error);
	const stack = getStack(error);

	return [prefix ? `${prefix}\n${message}` : `${message}`, stack];
}

function getStack(error: unknown): string | void {
	if (!(error instanceof Error)) return;

	const message = error.message;

	const stack = match(error)
		.with({ cause: P.select({ stack: P.string }) }, (error) => getStack(error))
		.with({ stack: P.select(P.string) }, (stack) => stack)
		.otherwise(() => {});

	if (stack) {
		const stackWithoutRootMessage = stack.replace(message, "");
		return pipe(stackWithoutRootMessage, cleanEmptyNewlines, cutFirstLine);
	}
}

function cutFirstLine(text: string): string {
	return text.split("\n").slice(1).join("\n");
}
