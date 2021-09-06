import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database-module/database.module';
import { UsersModule } from './database-module/users/users.module';
import { UserController } from './database-module/users/user.controller';
import { ServiceModule } from './database-module/services/service.module';
import { ServiceController } from './database-module/services/serviceController';

@Module({
  imports: [DatabaseModule, UsersModule, ServiceModule],
  controllers: [AppController, UserController, ServiceController],
  providers: [AppService],
})
export class AppModule {}
