import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { DatabaseModule } from '../database.module';
import { orderProviders } from './order.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...orderProviders, OrderService],
})
export class OrderModule {}
