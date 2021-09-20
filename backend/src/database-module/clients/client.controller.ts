import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:clientId')
  async getClientDetails(@Param('clientId') clientId: number): Promise<Client> {
    const res = await this.clientService.getClientDetails(clientId);
    console.log(res);
    return res;
  }
}
