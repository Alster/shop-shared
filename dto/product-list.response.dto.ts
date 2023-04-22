import { ProductAdminDto, ProductDto } from "./product.dto";

export class ProductListResponseDto {
  products!: ProductAdminDto[];
  total!: number;
  filters!: { [key: string]: Set<string> };
}
