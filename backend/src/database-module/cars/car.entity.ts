import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Client } from '../clients/client.entity';
import { Order } from '../orders/order.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  registration: string;

  @Column()
  model: string;

  @Column()
  version: string;

  @Column()
  color: string;

  @OneToMany(() => Order, (order) => order.car)
  order: Order;

  @ManyToOne(() => Client, (client) => client.cars)
  client: Client;
}
