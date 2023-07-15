import { CurrencyEnum } from "../../constants/exchange";
import { OrderStatus } from "../../constants/order";
import { MoneySmall } from "../primitiveTypes";
import { CreateOrderItemDataDto, DeliveryDataDto } from "./createOrder.dto";
import { IStatusHistoryEntry } from "./iStatusHistoryEntry";
import { IMonobankWebhookDto } from "./monobank";

export interface OrderDto {
	id: string;
	lastName: string;
	firstName: string;
	phoneNumber: string;
	itemsData: CreateOrderItemDataDto[];
	delivery: DeliveryDataDto;
	totalPrice: MoneySmall;
	currency: CurrencyEnum;
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
	currency: CurrencyEnum;
	status: OrderStatus;
	createDate: string;
	statusHistory: IStatusHistoryEntry[];
	lastStatusUpdateDate: Date;

	invoiceId?: string;
	monoResponse?: IMonobankWebhookDto;
}
