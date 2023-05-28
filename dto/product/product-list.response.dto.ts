import { ProductDto } from './product.dto';

export class ProductListResponseDto {
  products!: ProductDto[];
  total!: number;
  filters!: { [key: string]: Set<string> };
  categories: string[] = [];
}
