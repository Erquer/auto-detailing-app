import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { DatabaseModule } from '../database.module';
import { workerProviders } from './worker.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...workerProviders, WorkerService],
  exports: [WorkerService],
})
export class WorkerModule {}
