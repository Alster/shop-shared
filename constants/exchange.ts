export enum CurrencyEnum {
	UAH = "UAH",
	USD = "USD",
	EUR = "EUR",
}

export const CURRENCIES = [CurrencyEnum.UAH, CurrencyEnum.USD, CurrencyEnum.EUR];

export const CURRENCY_TO_ISO_4217 = {
	[CurrencyEnum.UAH]: 980,
	[CurrencyEnum.USD]: 840,
	[CurrencyEnum.EUR]: 978,
};

export const ISO_4217_TO_CURRENCY = Object.entries(CURRENCY_TO_ISO_4217).reduce(
	(accumulator, [key, value]) => {
		accumulator[value] = key as CurrencyEnum;
		return accumulator;
	},
	{} as Record<number, CurrencyEnum>,
);

export const CURRENCY_TO_SYMBOL = {
	[CurrencyEnum.UAH]: "₴",
	[CurrencyEnum.USD]: "$",
	[CurrencyEnum.EUR]: "€",
};
