import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientService } from './client.service';
import { Client } from './client.entity';

@Controller('/api/clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  getClients(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @Post('/addClient')
  addClient(@Body() client: Client) {
    return this.clientService.addClient(client);
  }

  @Post('/updateClient/:clientId')
  updateClient(@Param('clientId') clientId: number, @Body() client: Client) {
    return this.clientService.updateClient(clientId, client);
  }
}
