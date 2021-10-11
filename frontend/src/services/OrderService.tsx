import { AxiosResponse } from 'axios';
import axios from '../utils/axios';
import { Client } from '../components/pages/Clients/ClientsTable';

export interface Workers {
  id: number;
  firstName: string;
  lastName: string;
  salary: number;
  workHours: number;
}

export interface Car {
  id: number;
  color: string;
  model: string;
  registration: string;
  version: string;
  client: Client;
}

export interface Service {
  id: number;
  serviceName: string;
  servicePrize: number;
  serviceCost: number;
  serviceDurationTime: number;
}

export interface Order {
  id: number;
  orderDate: string;
  deadline: Date;
  finishDate: Date;
  worker: Workers;
  client: Client;
  car: Car;
  service: Service[];
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

  static async getWorkers(): Promise<AxiosResponse<Workers[]>> {
    return axios.get<Workers[]>('/workers');
  }

  static async getServices(): Promise<AxiosResponse<Service[]>> {
    return axios.get<Service[]>('/services');
  }

  static async addOrders(order: Order): Promise<AxiosResponse<Order[]>> {
    return axios.post<Order[]>('/orders/addOrder', order);
  }

  static async getCars(): Promise<AxiosResponse<Car[]>> {
    return axios.get<Car[]>('/cars');
  }
}
