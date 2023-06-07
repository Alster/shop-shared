export const NOVA_POSHTA_DELIVERY_TYPE = {
  OFFICE: 'office',
  COURIER: 'courier',
} as const;

export type NovaPoshtaDeliveryType = keyof typeof NOVA_POSHTA_DELIVERY_TYPE;
