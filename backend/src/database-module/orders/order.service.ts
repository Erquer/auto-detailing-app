import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

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

  async getClientOrders(clientId: number): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['client'],
      where: {
        client: { id: clientId },
      },
    });
  }
}
