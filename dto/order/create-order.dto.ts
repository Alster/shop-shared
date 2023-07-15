import { NovaPoshtaDeliveryType } from "../../constants/checkout";
import { CURRENCY } from "../../constants/exchange";
import { ProductAttributesDto } from "../product/product.dto";

export type CreateOrderItemDataDto = {
	productId: string;
	attributes: ProductAttributesDto;
	qty: number;
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
	currency: CURRENCY;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	itemsData: CreateOrderItemDataDto[];
	delivery: DeliveryDataDto;
};
