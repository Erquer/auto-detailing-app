import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
} from 'typeorm';
import { Car } from '../cars/car.entity';
import {Order} from "../orders/order.entity";

@Entity()
@Unique(['firstName', 'lastName'])
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => Car, (car) => car.client)
  cars: Car;

  @OneToMany(() => Order, (order) => order.client)
  order: Order;
}
