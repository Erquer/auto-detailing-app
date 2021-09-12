import { Controller, Get, Post } from '@nestjs/common';
import { ServiceService } from './service.service';

@Controller('/api/services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  getServices() {
    return this.serviceService.findAll();
  }

  //for development usage to add some Services to database
  @Post('/initServices')
  async initServices() {
    return this.serviceService.initServices();
  }
}
