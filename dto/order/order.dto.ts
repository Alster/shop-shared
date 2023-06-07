import { OrderStatus } from '../../constants/order';
import { CreateOrderItemDataDto, DeliveryDataDto } from "./create-order.dto";

export interface OrderDto {
  id: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
  itemsData: CreateOrderItemDataDto[];
  delivery: DeliveryDataDto;
  status: OrderStatus;
  createDate: string;
}