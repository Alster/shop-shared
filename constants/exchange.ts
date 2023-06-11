export enum CURRENCY {
  UAH = 'UAH',
  USD = 'USD',
  EUR = 'EUR',
}

export const CURRENCIES = [CURRENCY.UAH, CURRENCY.USD, CURRENCY.EUR];

export const CURRENCY_TO_ISO_4217 = {
  [CURRENCY.UAH]: 980,
  [CURRENCY.USD]: 840,
  [CURRENCY.EUR]: 978,
};

export const ISO_4217_TO_CURRENCY = Object.entries(CURRENCY_TO_ISO_4217).reduce(
  (acc, [key, value]) => {
    acc[value] = key as CURRENCY;
    return acc;
  },
  {} as Record<number, CURRENCY>,
);

export const CURRENCY_TO_SYMBOL = {
  [CURRENCY.UAH]: '₴',
  [CURRENCY.USD]: '$',
  [CURRENCY.EUR]: '€',
};
