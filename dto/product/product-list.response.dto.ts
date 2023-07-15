import { MoneySmall } from "@/shop-shared/dto/primitiveTypes";

import { ProductAttributesDto, ProductDto } from "./product.dto";

export class ProductListResponseDto {
	products!: ProductDto[];
	total!: number;
	filters!: ProductAttributesDto;
	categories: string[] = [];
	priceMin!: MoneySmall;
	priceMax!: MoneySmall;
}
