import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database-module/database.module';
import { UsersModule } from './database-module/users/users.module';
import { UserController } from './database-module/users/user.controller';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
