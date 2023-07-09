import { ProductAttributesDto, ProductDto } from './product.dto';

export class ProductListResponseDto {
  products!: ProductDto[];
  total!: number;
  filters!: ProductAttributesDto;
  categories: string[] = [];
  priceMin!: number;
  priceMax!: number;
}
