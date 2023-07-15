export const ORDER_STATUS = {
	CREATED: "CREATED",

	PENDING: "PENDING",
	PAID: "PAID",

	FAILED: "FAILED",
	FINISHED: "FINISHED",
} as const;

export type OrderStatus = keyof typeof ORDER_STATUS;
