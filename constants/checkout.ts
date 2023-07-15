export const NOVA_POSHTA_DELIVERY_TYPE = {
	OFFICE: "OFFICE",
	COURIER: "COURIER",
} as const;

export type NovaPoshtaDeliveryType = keyof typeof NOVA_POSHTA_DELIVERY_TYPE;
