import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Service } from './service.entity';

@Injectable()
export class ServiceService {
  constructor(
    @Inject('SERVICES_REPOSITORY')
    private serviceRepository: Repository<Service>,
  ) {}

  findAll(): Promise<Service[]> {
    return this.serviceRepository.find();
  }

  findOne(id: string): Promise<Service> {
    return this.serviceRepository.findOne(id);
  }

  getServicesByIds(ids: number[]) {
    return this.serviceRepository.findByIds(ids);
  }

  async remove(id: string): Promise<void> {
    await this.serviceRepository.delete(id);
  }

  async initServices(): Promise<string> {
    try {
      const isInitialized = await this.serviceRepository.find();
      const services = [
        {
          serviceName: 'Mycie one-step',
          serviceCost: 50,
          serviceDuration: 3,
          servicePrize: 70,
        },
        {
          serviceName: 'Mycie wieloetapowe',
          serviceCost: 80,
          serviceDuration: 5,
          servicePrize: 100,
        },
        {
          serviceName: 'Woskowanie 1',
          serviceCost: 30,
          serviceDuration: 2,
          servicePrize: 60,
        },
        {
          serviceName: 'Woskowanie 2',
          serviceCost: 40,
          serviceDuration: 3,
          servicePrize: 80,
        },
        {
          serviceName: 'Woskowanie 3',
          serviceCost: 60,
          serviceDuration: 7,
          servicePrize: 100,
        },
        {
          serviceName: 'Polerowanie zwykłe',
          serviceCost: 80,
          serviceDuration: 8,
          servicePrize: 120,
        },
      ];
      if (isInitialized.length === 0) {
        for (let i = 0; i < 6; i++) {
          const service = new Service();
          service.serviceName = services[i].serviceName;
          service.serviceCost = services[i].serviceCost;
          service.serviceDurationTime = services[i].serviceDuration;
          service.servicePrize = services[i].servicePrize;

          await this.serviceRepository.save(service);
        }
        return 'Services initiated';
      } else {
        return 'Services already initialized';
      }
    } catch (e) {
      console.error(e);
    }
  }
}
