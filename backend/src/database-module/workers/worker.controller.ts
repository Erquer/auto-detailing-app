import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { WorkerService } from './worker.service';
import { Workers } from './worker.entity';

@Controller('/api/workers')
export class WorkerController {
  private logger = new Logger(WorkerController.name);
  constructor(private readonly workerService: WorkerService) {}

  @Get()
  getWorkers(): Promise<Workers[]> {
    return this.workerService.findAll();
  }

  @Post('/addWorker')
  async addWorker(@Body() worker: Workers): Promise<string> {
    try {
      await this.workerService.addWorker(worker);
      return 'success';
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException();
    }
  }

  @Post('/updateWorker/:workerId')
  async updateWorker(
    @Param('workerId') workerId: number,
    @Body() worker: Workers,
  ) {
    try {
      return await this.workerService.updateWorker(workerId, worker);
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException();
    }
  }
}
