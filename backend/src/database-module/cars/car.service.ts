import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Car } from './car.entity';

@Injectable()
export class CarService {
  constructor(
    @Inject('CARS_REPOSITORY')
    private carRepository: Repository<Car>,
  ) {}

  findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  findOne(id: string): Promise<Car> {
    return this.carRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.carRepository.delete(id);
  }

  async addCar(car: Car): Promise<boolean> {
    const res = await this.carRepository.save(car);
    return !!res;
  }

  async updateCar(carId, car: Car): Promise<any> {
    const res = await this.carRepository.update(carId, car);
    console.log(res);
    return res;
  }
}
