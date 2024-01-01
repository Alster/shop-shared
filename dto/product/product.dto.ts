import { CurrencyEnum } from "../../constants/exchange";
import { MoneySmall } from "../primitiveTypes";
import { TranslatedText } from "../translatedText";

export type ProductAttributesDto = { [index: string]: string[] };

export interface ProductItemDto {
	sku: string;
	attributes: ProductAttributesDto;
	images: string[];
}

export interface ProductDto {
	id: string;
	publicId: string;
	title: string;
	description: string;
	categories: string[];
	characteristics: ProductAttributesDto;
	items: ProductItemDto[];
	attrs: ProductAttributesDto;
	quantity: number;
	price: MoneySmall;
	discount: number;
	selectedItem: string | null;
	active: boolean;
	createDate: string;
}

export interface ProductAdminDto {
	id?: string;
	publicId: string;
	title: TranslatedText;
	description: TranslatedText;
	categories: string[];
	characteristics: ProductAttributesDto;
	items: ProductItemDto[];
	attrs: ProductAttributesDto;
	quantity: number;
	price: MoneySmall;
	discount: number;
	currency: CurrencyEnum;
	active: boolean;
	createDate: string;
}
