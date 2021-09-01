import { Connection } from 'typeorm';
import { Car } from './car.entity';

export const carProviders = [
  {
    provide: 'CARS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Car),
    inject: ['DATABASE_CONNECTION'],
  },
];
