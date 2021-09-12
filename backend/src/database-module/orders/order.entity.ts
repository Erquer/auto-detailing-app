import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { Client } from '../clients/client.entity';
import { Car } from '../cars/car.entity';
import { Service } from '../services/service.entity';
import { Workers } from '../workers/worker.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  orderDate: Date;

  @Column()
  deadline: Date;

  @Column()
  status: boolean;

  @OneToOne(() => Workers)
  @JoinColumn()
  worker: Workers;

  @OneToOne(() => Client)
  @JoinColumn()
  client: Client;

  @OneToOne(() => Car)
  @JoinColumn()
  car: Car;

  @ManyToMany(() => Service)
  @JoinTable()
  service: Service[];
}
