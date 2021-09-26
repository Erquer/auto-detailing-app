import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Client } from './database-module/clients/client.entity';
import { Car } from './database-module/cars/car.entity';
import { Workers } from './database-module/workers/worker.entity';
import { Order } from './database-module/orders/order.entity';
import { Service } from './database-module/services/service.entity';

@Injectable()
export class AppService {
  private logger = new Logger(AppService.name);
  constructor(
    @Inject('CLIENTS_REPOSITORY')
    private readonly clientRepository: Repository<Client>,
    @Inject('CARS_REPOSITORY')
    private readonly carRepository: Repository<Car>,
    @Inject('WORKERS_REPOSITORY')
    private readonly workerRepository: Repository<Workers>,
    @Inject('ORDERS_REPOSITORY')
    private readonly orderRepository: Repository<Order>,
    @Inject('SERVICES_REPOSITORY')
    private readonly serviceRepository: Repository<Service>,
  ) {}

  getHello(): string {
    return 'Hello World!  ';
  }

  private static randomDate(start: Date, end: Date) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
  }

  async initApp() {
    try {
      this.logger.log('Init Clients');
      const clients = await this.clientRepository.find();
      if (clients.length < 5) {
        //to add few clients.
        for (let i = 1; i <= 8; i++) {
          const client = new Client();
          client.firstName = `Client ${i}`;
          client.lastName = `Surclient ${i}`;
          await this.clientRepository.save(client);
        }
      }
      this.logger.log('Init Cars');
      const cars = await this.carRepository.find();
      if (cars.length < 5) {
        for (let i = 1; i <= 8; i++) {
          const car = new Car();
          car.registration = `POGO ${i}${i + 1}${i + 2}${i + 5}`;
          car.model = `Toyota`;
          car.version = `Corrolla ${i}`;
          car.color = `Black`;
          car.client = await this.clientRepository.findOne(i);
          await this.carRepository.save(car);
        }
      }
      this.logger.log('Init workers');
      const workers = await this.workerRepository.find();
      if (workers.length < 5) {
        for (let i = 1; i <= 8; i++) {
          const worker = new Workers();
          worker.firstName = `Pracownik ${i}`;
          worker.lastName = `Kowalski ${i}`;
          worker.workHours = (Math.round(Math.random() * 10) % 7) + 1;
          worker.salary = Math.round(Math.random() * 100);
          await this.workerRepository.save(worker);
        }
      }
      this.logger.log('Init orders');
      const orders = await this.orderRepository.find();
      if (orders.length < 5) {
        for (let i = 1; i <= 8; i++) {
          const order = new Order();
          order.client = await this.clientRepository.findOne(i);
          order.car = await this.carRepository.findOne(i);
          order.deadline = new Date(
            2021,
            10,
            Math.round(Math.random() % 30) + 1,
          );
          order.worker = await this.workerRepository.findOne(i);
          const services: number[] = [1, 2, 3, 4, 5, 6];
          order.service = await this.serviceRepository.findByIds(
            services.slice(
              Math.round(Math.random() * 10) % 4,
              (Math.round(Math.random() * 10) % 3) + 4,
            ),
          );
          await this.orderRepository.save(order);
        }
      }
      return true;
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException();
    }
  }
}
