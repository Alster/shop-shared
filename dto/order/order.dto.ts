import { CURRENCY } from "../../constants/exchange";
import { OrderStatus } from "../../constants/order";
import { MoneySmall } from "../primitiveTypes";
import { CreateOrderItemDataDto, DeliveryDataDto } from "./create-order.dto";
import { IStatusHistoryEntry } from "./IStatusHostoryEntry";
import { IMonobankWebhookDto } from "./Monobank";

export interface OrderDto {
	id: string;
	lastName: string;
	firstName: string;
	phoneNumber: string;
	itemsData: CreateOrderItemDataDto[];
	delivery: DeliveryDataDto;
	totalPrice: MoneySmall;
	currency: CURRENCY;
	status: OrderStatus;
	createDate: string;
}

export interface OrderAdminDto {
	id: string;
	lastName: string;
	firstName: string;
	phoneNumber: string;
	itemsData: CreateOrderItemDataDto[];
	delivery: DeliveryDataDto;
	totalPrice: MoneySmall;
	currency: CURRENCY;
	status: OrderStatus;
	createDate: string;
	statusHistory: IStatusHistoryEntry[];
	lastStatusUpdateDate: Date;

	invoiceId?: string;
	monoResponse?: IMonobankWebhookDto;
}
