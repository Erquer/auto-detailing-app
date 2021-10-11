import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { DatabaseModule } from '../database.module';
import { orderProviders } from './order.providers';
import {ClientModule} from "../clients/client.module";
import {CarModule} from "../cars/car.module";
import {ServiceModule} from "../services/service.module";
import {WorkerModule} from "../workers/worker.module";

@Module({
  imports: [DatabaseModule, ClientModule, CarModule, ServiceModule, WorkerModule],
  providers: [...orderProviders, OrderService],
  exports: [OrderService],
})
export class OrderModule {}
