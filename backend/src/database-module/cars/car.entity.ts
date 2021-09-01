import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Client } from '../clients/client.entity';

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

  @ManyToOne(() => Client, (client) => client.cars)
  client: Client;
}
