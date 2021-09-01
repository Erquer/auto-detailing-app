import { Connection } from 'typeorm';
import { Workers } from './worker.entity';

export const workerProviders = [
  {
    provide: 'WORKERS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Workers),
    inject: ['DATABASE_CONNECTION'],
  },
];
