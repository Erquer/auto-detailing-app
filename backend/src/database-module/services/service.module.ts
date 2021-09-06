import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { DatabaseModule } from '../database.module';
import { serviceProviders } from './service.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...serviceProviders, ServiceService],
  exports: [ServiceService],
})
export class ServiceModule {}
