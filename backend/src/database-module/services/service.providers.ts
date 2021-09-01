import { Connection } from 'typeorm';
import { Service } from './service.entity';

export const serviceProviders = [
  {
    provide: 'SERVICES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Service),
    inject: ['DATABASE_CONNECTION'],
  },
];
