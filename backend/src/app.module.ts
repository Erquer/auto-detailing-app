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

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    ServiceModule,
    CarModule,
    ClientModule,
    OrderModule,
  ],
  controllers: [
    AppController,
    UserController,
    ServiceController,
    CarController,
    ClientController,
    OrderController,
  ],
  providers: [AppService],
})
export class AppModule {}
