import { OrderStatus } from '../../constants/order';
import { CreateOrderItemDataDto, DeliveryDataDto } from './create-order.dto';
import { MoneySmall } from '../../../shop_shared_server/dto/primitiveTypes';

export interface OrderDto {
  id: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
  itemsData: CreateOrderItemDataDto[];
  delivery: DeliveryDataDto;
  totalPrice: MoneySmall;
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
  totalPrice: MoneySmall;
  currency: string;
  status: OrderStatus;
  createDate: string;
}
