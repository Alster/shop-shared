import { OrderStatus } from '../../constants/order';
import { CreateOrderItemDataDto, DeliveryDataDto } from './create-order.dto';

export interface OrderDto {
  id: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
  itemsData: CreateOrderItemDataDto[];
  delivery: DeliveryDataDto;
  totalPrice: number;
  currency: string;
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
  totalPrice: number;
  currency: string;
  status: OrderStatus;
  createDate: string;
}
