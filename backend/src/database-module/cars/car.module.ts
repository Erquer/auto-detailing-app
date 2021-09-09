import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { DatabaseModule } from '../database.module';
import { carProviders } from './car.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...carProviders, CarService],
  exports: [CarService],
})
export class CarModule {}
