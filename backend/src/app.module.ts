import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database-module/database.module';
import { UsersModule } from './database-module/users/users.module';
import { UserController } from './database-module/users/user.controller';
import { ServiceModule } from './database-module/services/service.module';
import { ServiceController } from './database-module/services/serviceController';
import { CarModule } from './database-module/cars/car.module';
import { CarController } from './database-module/cars/car.controller';

@Module({
  imports: [DatabaseModule, UsersModule, ServiceModule, CarModule],
  controllers: [
    AppController,
    UserController,
    ServiceController,
    CarController,
  ],
  providers: [AppService],
})
export class AppModule {}
