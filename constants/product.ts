export const ATTRIBUTE_TYPE = {
	SELECT: "select",
	MULTI: "multi",
	BOOLEAN: "boolean",
} as const;

export type AttributeType = keyof typeof ATTRIBUTE_TYPE;
