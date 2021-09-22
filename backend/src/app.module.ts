import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database-module/database.module';
import { UsersModule } from './database-module/users/users.module';
import { UserController } from './database-module/users/user.controller';
import { ServiceModule } from './database-module/services/service.module';
import { ServiceController } from './database-module/services/service.controller';
import { CarModule } from './database-module/cars/car.module';
import { CarController } from './database-module/cars/car.controller';
import { ClientModule } from './database-module/clients/client.module';
import { ClientController } from './database-module/clients/client.controller';
import { OrderModule } from './database-module/orders/order.module';
import { OrderController } from './database-module/orders/order.controller';
import { WorkerModule } from './database-module/workers/worker.module';
import { WorkerController } from './database-module/workers/worker.controller';
import { databaseProviders } from './database-module/database.providers';
import { clientProviders } from './database-module/clients/client.providers';
import { workerProviders } from './database-module/workers/worker.providers';
import { carProviders } from './database-module/cars/car.providers';
import { orderProviders } from './database-module/orders/order.providers';
import { serviceProviders } from './database-module/services/service.providers';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    ServiceModule,
    CarModule,
    ClientModule,
    OrderModule,
    WorkerModule,
  ],
  controllers: [
    AppController,
    UserController,
    ServiceController,
    CarController,
    ClientController,
    OrderController,
    WorkerController,
  ],
  providers: [
    AppService,
    ...databaseProviders,
    ...clientProviders,
    ...workerProviders,
    ...carProviders,
    ...orderProviders,
    ...serviceProviders,
  ],
})
export class AppModule {}
