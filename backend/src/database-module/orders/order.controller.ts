import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { UpdateResult } from 'typeorm';

@Controller('/api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getOrders() {
    return this.orderService.findAll();
  }

  @Get('/getOrder/:orderId')
  getOrder(@Param('orderId') orderId: number) {
    return this.orderService.findOne(orderId);
  }

  @Post('/addOrder')
  addOrder(@Body() order: Order) {
    return this.orderService.addOrder(order);
  }

  @Get('/clientOrders/:clientId')
  async getClientOrders(@Param('clientId') clientId): Promise<Order[]> {
    return this.orderService.getClientOrders(clientId);
  }

  @Post('/updateOrder/:orderId')
  async updateOrder(@Param('orderId') orderId: number, @Body() order: Order) {
    return this.orderService.updateOrder(orderId, order);
  }

  @Post('/finishOrder/:orderId')
  async finishOrder(@Param('orderId') orderId: number): Promise<UpdateResult> {
    return this.orderService.finishOrder(orderId);
  }
  @Post('/unfinishOrder/:orderId')
  async unfinishOrder(
    @Param('orderId') orderId: number,
  ): Promise<UpdateResult> {
    return this.orderService.unfinishOrder(orderId);
  }

  @Get('/byWeek')
  async getOrdersFromLastWeek(): Promise<Order[]> {
    return this.orderService.getOrdersFromLastWeek();
  }

  @Get('/profitsByWeek')
  async getProfitsByWeek() {
    return this.orderService.getProfitsFromLastWeekByDay();
  }
}
