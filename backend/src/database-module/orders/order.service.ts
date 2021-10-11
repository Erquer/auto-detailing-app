import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Between, Equal, Repository, UpdateResult } from 'typeorm';
import { Order } from './order.entity';
import { addDays, subWeeks } from 'date-fns';
import { CarService } from '../cars/car.service';
import { ServiceService } from '../services/service.service';
import { ClientService } from '../clients/client.service';
import { WorkerService } from '../workers/worker.service';

@Injectable()
export class OrderService {
  private logger = new Logger(OrderService.name);
  constructor(
    @Inject('ORDERS_REPOSITORY')
    private orderRepository: Repository<Order>,
    private readonly carService: CarService,
    private readonly servicesService: ServiceService,
    private readonly clientService: ClientService,
    private readonly workerService: WorkerService,
  ) {}

  findAll(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['car', 'client', 'worker', 'service'],
    });
  }

  findOne(id: number): Promise<Order> {
    return this.orderRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.orderRepository.delete(id);
  }

  async addOrder(order: Order) {
    const client = await this.clientService.findOne(order.client.id);
    const car = await this.carService.findOne(order.car.id);
    const services = await this.servicesService.getServicesByIds(
      order.service.map((service) => service.id),
    );
    const orderToAdd = new Order();
    orderToAdd.service = services;
    orderToAdd.car = car;
    orderToAdd.client = client;
    orderToAdd.worker = await this.workerService.findOne(order.worker.id);
    orderToAdd.deadline = order.deadline;
    orderToAdd.finishDate = order.finishDate;
    orderToAdd.orderDate = order.orderDate || null;
    await this.orderRepository.save(orderToAdd);
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
    try {
      this.logger.log(`getProfitsFromLastWeekByDay called`);
      const date = new Date();
      const serviceCosts = await this.orderRepository.find({
        relations: ['service', 'worker', 'car'],
        where: {
          finishDate: Between(subWeeks(date, 1), addDays(date, 3)),
        },
      });
      const profitsFromServices = serviceCosts.map((order: Order) => {
        return order.service.reduce(
          (a, b) => a + b.servicePrize - b.serviceCost,
          0,
        );
      });
      const worker = serviceCosts.map((order) => order.worker)[0];
      const reduceByWorkerSalary = serviceCosts
        .map((order) => order.service)
        .map((service) =>
          service.reduce(
            (a, b) => a - b.serviceDurationTime * (worker.salary / 8),
            0,
          ),
        );
      for (let i = 0; i < profitsFromServices.length; i++) {
        profitsFromServices[i] =
          profitsFromServices[i] + reduceByWorkerSalary[i];
      }
      const toReturn: { date: Date; profit: number }[] = [];
      for (let i = 0; i < profitsFromServices.length; i++) {
        toReturn.push({
          date: serviceCosts.map((order) => order.finishDate)[i],
          profit: profitsFromServices[i],
        });
      }
      return toReturn;
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException();
    }
  }

  async getOrdersByFinishDate(date: string) {
    try {
      const finishDateFromClient = new Date(date);
      return this.orderRepository.find({
        relations: ['client', 'service', 'car', 'worker'],
        where: {
          finishDate: finishDateFromClient,
        },
      });
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
