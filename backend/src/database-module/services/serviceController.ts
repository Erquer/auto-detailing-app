import { Controller, Post } from '@nestjs/common';
import { ServiceService } from './service.service';

@Controller('/api/services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  //for development usage to add some Services to database
  @Post('/initServices')
  async initServices() {
    return this.serviceService.initServices();
  }
}
