import { ProductAttributesDto, ProductDto } from './product.dto';
import {MoneySmall} from "@/shop-shared/dto/primitiveTypes";

export class ProductListResponseDto {
  products!: ProductDto[];
  total!: number;
  filters!: ProductAttributesDto;
  categories: string[] = [];
  priceMin!: MoneySmall;
  priceMax!: MoneySmall;
}
