import { OrderAdminDto } from '../order/order.dto';

export class OrderListAdminResponseDto {
  orders!: OrderAdminDto[];
  total!: number;
}
