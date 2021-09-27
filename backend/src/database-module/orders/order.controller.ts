import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { UpdateResult } from 'typeorm';

@Controller('/api/orders')
export class OrderController {
  private logger = new Logger(OrderController.name);
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getOrders() {
    try {
      return this.orderService.findAll();
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException();
    }
  }

  @Get('/getOrder/:orderId')
  getOrder(@Param('orderId') orderId: number) {
    try {
      return this.orderService.findOne(orderId);
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException();
    }
  }

  @Post('/addOrder')
  addOrder(@Body() order: Order) {
    try {
      return this.orderService.addOrder(order);
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException();
    }
  }

  @Get('/clientOrders/:clientId')
  async getClientOrders(@Param('clientId') clientId): Promise<Order[]> {
    try {
      return this.orderService.getClientOrders(clientId);
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException();
    }
  }

  @Post('/updateOrder/:orderId')
  async updateOrder(@Param('orderId') orderId: number, @Body() order: Order) {
    try {
      return this.orderService.updateOrder(orderId, order);
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException();
    }
  }

  @Post('/finishOrder/:orderId')
  async finishOrder(@Param('orderId') orderId: number): Promise<UpdateResult> {
    try {
      return this.orderService.finishOrder(orderId);
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException();
    }
  }

  @Post('/unfinishOrder/:orderId')
  async unfinishOrder(
    @Param('orderId') orderId: number,
  ): Promise<UpdateResult> {
    try {
      return this.orderService.unfinishOrder(orderId);
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException();
    }
  }

  @Get('/byWeek')
  async getOrdersFromLastWeek(): Promise<Order[]> {
    try {
      return this.orderService.getOrdersFromLastWeek();
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException();
    }
  }

  @Get('/profitsByWeek')
  async getProfitsByWeek() {
    try {
      return this.orderService.getProfitsFromLastWeekByDay();
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException();
    }
  }

  @Get('/getByFinishDate/:date')
  async getByFinishDate(@Param('date') date: string) {
    try {
      this.logger.log(`getByFinishDate called with ${date}`);
      return this.orderService.getOrdersByFinishDate(date);
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException();
    }
  }
}
