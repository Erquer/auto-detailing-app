import { Connection } from 'typeorm';
import { Client } from './client.entity';

export const clientProviders = [
  {
    provide: 'CLIENTS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Client),
    inject: ['DATABASE_CONNECTION'],
  },
];
