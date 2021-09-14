import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';

@Controller('/api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getOrders() {
    return this.orderService.findAll();
  }

  @Get('/:orderId')
  getOrder(@Param('orderId') orderId: number) {
    return this.orderService.findOne(orderId);
  }

  @Post('/addOrder')
  addOrder(@Body() order: Order) {
    return this.orderService.addOrder(order);
  }
}
