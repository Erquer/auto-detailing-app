import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(
    @Inject('CLIENTS_REPOSITORY')
    private clientRepository: Repository<Client>,
  ) {}

  findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  findOne(id: string): Promise<Client> {
    return this.clientRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.clientRepository.delete(id);
  }

  async addClient(client: Client) {
    await this.clientRepository.save(client);
  }
  async updateClient(clientId: number, client: Client) {
    await this.clientRepository.update(clientId, client);
  }
}
