import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
  ManyToMany,
  JoinColumn,
  JoinTable,
  OneToMany,
  ManyToOne,
  Check,
} from 'typeorm';
import { Client } from '../clients/client.entity';
import { Car } from '../cars/car.entity';
import { Service } from '../services/service.entity';
import { Workers } from '../workers/worker.entity';

@Entity('orders')
@Check('"orderDate" < "finishDate"')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  orderDate: Date;

  @Column({ type: 'date' })
  deadline: Date;

  @Column({ type: 'date', nullable: true })
  finishDate: Date;

  @ManyToOne(() => Workers, (workers) => workers.order)
  @JoinColumn()
  worker: Workers;

  @ManyToOne(() => Client, (client) => client.order)
  @JoinColumn()
  client: Client;

  @OneToOne(() => Car)
  @JoinColumn()
  car: Car;

  @ManyToMany(() => Service)
  @JoinTable()
  service: Service[];
}
