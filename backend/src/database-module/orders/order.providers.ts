import { Connection } from 'typeorm';
import { Order } from './order.entity';

export const orderProviders = [
  {
    provide: 'ORDERS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Order),
    inject: ['DATABASE_CONNECTION'],
  },
];
