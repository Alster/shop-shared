import { ProductAdminDto } from "./product.dto";

export class ProductListAdminResponseDto {
	products!: ProductAdminDto[];
	total!: number;
	filters!: { [key: string]: string[] };
	categories: string[] = [];
}
