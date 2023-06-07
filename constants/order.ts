export const ORDER_STATUS = {
  CREATED: 'created',
  FAILED: 'failed',
  FINISHED: 'finished',
} as const;

export type OrderStatus = keyof typeof ORDER_STATUS;
