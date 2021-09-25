import { AxiosResponse } from 'axios';
import { Client } from '../components/pages/Clients/ClientsTable';
import axios from '../utils/axios';

export class ClientService {
  static async getClients(): Promise<AxiosResponse<Client[]>> {
    return axios.get<Client[]>('/clients');
  }
}
