import { TranslatedText } from '../translated-text';
import { SmallMoney } from '../../../shop_shared_server/dto/primitiveTypes';

export type ProductAttributesDto = { [index: string]: string[] };

export interface ProductItemDto {
  sku: string;
  attributes: ProductAttributesDto;
}

export interface ProductDto {
  id?: string;
  title: string;
  description: string;
  categories: string[];
  characteristics: ProductAttributesDto;
  items: ProductItemDto[];
  attrs: ProductAttributesDto;
  quantity: number;
  price: SmallMoney;
  discount: number;
  active: boolean;
  createDate: string;
}

export interface ProductAdminDto {
  id?: string;
  title: TranslatedText;
  description: TranslatedText;
  categories: string[];
  characteristics: ProductAttributesDto;
  items: ProductItemDto[];
  attrs: ProductAttributesDto;
  quantity: number;
  price: SmallMoney;
  discount: number;
  currency: string;
  active: boolean;
  createDate: string;
}
