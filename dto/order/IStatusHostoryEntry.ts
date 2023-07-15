import { OrderStatus } from "../../constants/order";

export interface IStatusHistoryEntry {
	status: OrderStatus;
	date: Date;
	additionalData?: any;
}
