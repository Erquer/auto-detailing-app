import { Inject, Injectable } from '@nestjs/common';
import { Between, Repository, UpdateResult } from 'typeorm';
import { Order } from './order.entity';
import { addDays, subWeeks } from 'date-fns';
import { Workers } from '../workers/worker.entity';
import { Service } from '../services/service.entity';

@Injectable()
export class OrderService {
  constructor(
    @Inject('ORDERS_REPOSITORY')
    private orderRepository: Repository<Order>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  findOne(id: number): Promise<Order> {
    return this.orderRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.orderRepository.delete(id);
  }

  async addOrder(order: Order) {
    await this.orderRepository.save(order);
  }

  async finishOrder(orderId: number): Promise<UpdateResult> {
    const order = await this.orderRepository.findOne(orderId);
    order.finishDate = new Date();
    const result = await this.orderRepository.update(orderId, order);
    return result;
  }
  async unfinishOrder(orderId: number): Promise<UpdateResult> {
    const order = await this.orderRepository.findOne(orderId);
    order.finishDate = null;
    const result = await this.orderRepository.update(orderId, order);
    return result;
  }

  async getClientOrders(clientId: number): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['client', 'worker', 'service', 'car'],
      where: {
        client: { id: clientId },
      },
    });
  }

  async getOrderFromDate(date: string): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['car'],
      where: {
        finishDate: date,
      },
    });
  }

  async updateOrder(orderId: number, order: Order): Promise<UpdateResult> {
    return this.orderRepository.update(orderId, order);
  }

  async getOrdersFromLastWeek(): Promise<Order[]> {
    const date = new Date();
    return this.orderRepository.find({
      relations: ['service'],
      where: {
        finishDate: Between(subWeeks(date, 1), addDays(date, 3)),
      },
    });
  }

  async getProfitsFromLastWeekByDay() {
    const date = new Date();
    const serviceCosts = await this.orderRepository.find({
      relations: ['service', 'worker'],
      where: {
        finishDate: Between(subWeeks(date, 1), addDays(date, 3)),
      },
    });
    console.log(serviceCosts);
    const profitsFromServices = serviceCosts.map((order: Order) => {
      return order.service.reduce(
        (a, b) => a + b.servicePrize - b.serviceCost,
        0,
      );
    });
    console.log(profitsFromServices);
    const worker = serviceCosts.map((order) => order.worker)[0];
    const reduceByWorkerSalary = serviceCosts
      .map((order) => order.service)
      .map((service) =>
        service.reduce(
          (a, b) => a - b.serviceDurationTime * (worker.salary / 8),
          0,
        ),
      );
    console.log(reduceByWorkerSalary);
    for (let i = 0; i < profitsFromServices.length; i++) {
      profitsFromServices[i] = profitsFromServices[i] + reduceByWorkerSalary[i];
    }
    return profitsFromServices;
  }
}
