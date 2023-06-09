export enum CURRENCY {
    UAH = "UAH",
    USD = "USD",
    EUR = "EUR",
}

export const CURRENCIES = [
    CURRENCY.UAH,
    CURRENCY.USD,
    CURRENCY.EUR,
];

export const CURRENCY_TO_ISO_4217 = {
    [CURRENCY.UAH]: 980,
    [CURRENCY.USD]: 840,
    [CURRENCY.EUR]: 978,
}

export const CURRENCY_TO_SYMBOL = {
    [CURRENCY.UAH]: "₴",
    [CURRENCY.USD]: "$",
    [CURRENCY.EUR]: "€",
};
