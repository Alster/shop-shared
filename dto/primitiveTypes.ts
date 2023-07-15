enum SmallMoneyEnum {}
export type MoneySmall = number | { _A: SmallMoneyEnum };

enum BigMoneyEnum {}
export type MoneyBig = number | { _A: BigMoneyEnum };

export function moneySmallToBig(x: MoneySmall): MoneyBig {
	return (Math.floor(x as number) / 100) as MoneyBig;
}

export function moneyBigToSmall(x: MoneyBig): MoneySmall {
	return Math.floor((x as number) * 100) as MoneySmall;
}
