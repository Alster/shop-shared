import { TranslatedText } from '../translated-text';
import { MoneySmall } from '../primitiveTypes';
import { CURRENCY } from '../../constants/exchange';

export type ProductAttributesDto = { [index: string]: string[] };

export interface ProductItemDto {
  sku: string;
  attributes: ProductAttributesDto;
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
  currency: CURRENCY;
  active: boolean;
  createDate: string;
}
