import { NovaPoshtaDeliveryType } from "../../constants/checkout";
import { CurrencyEnum } from "../../constants/exchange";
import { ProductItemDto } from "../product/product.dto";

export type CreateOrderItemDataDto = ProductItemDto & {
	productId: string;
};

export type DeliveryNVOfficeDto = {
	cityName: string;
	officeName: string;
};

export type DeliveryNVCourierDto = {
	cityName: string;
	street: string;
	building: string;
	room: string;
};

export type DeliveryDataDto = {
	whereToDeliver: NovaPoshtaDeliveryType;
	data: DeliveryNVOfficeDto | DeliveryNVCourierDto;
};

export type CreateOrderDto = {
	currency: CurrencyEnum;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	itemsData: CreateOrderItemDataDto[];
	delivery: DeliveryDataDto;
};
