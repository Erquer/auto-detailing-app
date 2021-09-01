import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serviceName: string;

  @Column()
  serviceCost: number;

  @Column()
  serviceDurationTime: number;

  @Column()
  servicePrize: number;
}
