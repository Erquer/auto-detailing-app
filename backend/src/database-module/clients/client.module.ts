import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { DatabaseModule } from '../database.module';
import { clientProviders } from './client.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...clientProviders, ClientService],
})
export class ClientModule {}
