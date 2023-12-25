import { Opaque } from "./opaque";

const ProductColorSetSymbol: unique symbol = Symbol();

export type ProductColorSet = Opaque<typeof ProductColorSetSymbol, string>;

export function createProductColorSet(colors: string[]): ProductColorSet {
	return colors.join(":") as ProductColorSet;
}

export function isProductColorSet(color: string): color is ProductColorSet {
	return true;
}
