import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './car.entity';

@Controller('/api/cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getCars(): Promise<Car[]> {
    return this.carService.findAll();
  }

  @Post('/addCar')
  addCar(
    @Body()
    car: {
      registration: string;
      model: string;
      version: string;
      color: string;
    },
  ): Promise<boolean> {
    try {
      const addedCar = new Car();
      addedCar.model = car.model;
      addedCar.color = car.color;
      addedCar.registration = car.registration;
      addedCar.version = car.version;

      return this.carService.addCar(addedCar);
    } catch (e) {
      console.error(e);
    }
  }

  @Post('/updateCar/:carId')
  updateCar(@Param('carId') carId: number, @Body() car: Car) {
    const updatedCat = this.carService.updateCar(carId, car);
    console.log(updatedCat);
  }
}
