import { AxiosResponse } from 'axios';
import axios from '../utils/axios';
import { Client } from '../components/pages/Clients/ClientsTable';

export interface Workers {
  id: number;

}

export interface Car {
  id: number;
  color: string;
  model: string;
  registration: string;
}

export interface Service {
  id: number;
  serviceName: string;
  servicePrize: number;
  serviceCost: number;
}

export interface Order {
  // id: number;
  orderDate: Date;
  deadline: Date;
  finishDate: Date;
  worker: Workers | any;
  client: Client;
  car: Car | any;
  service: Service[] | any;
}

export class OrderService {
  static async getOrders(): Promise<AxiosResponse<Order[]>> {
    return axios.get<Order[]>('/orders');
  }

  static async getOrdersFromLastWeek(): Promise<AxiosResponse<Order[]>> {
    return axios.get<Order[]>('/orders/byWeek');
  }

  static async getProfitsFromLastWeek(): Promise<
    AxiosResponse<{ date: Date; profit: number }[]>
    > {
    return axios.get('/orders/profitsByWeek');
  }

  static async getOrdersByFinishDate(
    date: string,
  ): Promise<AxiosResponse<Order[]>> {
    return axios.get(`/orders/getByFinishDate/${date}`);
  }
}
