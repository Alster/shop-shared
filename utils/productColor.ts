import { Opaque } from "./opaque";

const ProductColorSymbol: unique symbol = Symbol();

export type ProductColor = Opaque<typeof ProductColorSymbol, string>;

export function createProductColor(color: string): ProductColor {
	return color as ProductColor;
}

export function isProductColor(color: string): color is ProductColor {
	return true;
}
