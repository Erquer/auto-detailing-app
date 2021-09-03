import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Workers } from './worker.entity';

@Injectable()
export class WorkerService {
  constructor(
    @Inject('WORKERS_REPOSITORY')
    private workersRepository: Repository<Workers>,
  ) {}

  findAll(): Promise<Workers[]> {
    return this.workersRepository.find();
  }

  findOne(id: string): Promise<Workers> {
    return this.workersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.workersRepository.delete(id);
  }
}