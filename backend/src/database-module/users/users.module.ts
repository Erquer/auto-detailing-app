import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database.module';
import { usersProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...usersProviders, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
