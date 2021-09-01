import { Entity, Column, PrimaryGeneratedColumn, Unique, Check } from 'typeorm';

@Entity()
@Unique(['firstName', 'lastName'])
@Check(`"salary" > 0`)
@Check(`"workHours" BETWEEN 0 AND 8`)
export class Workers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  salary: number;

  @Column()
  workHours: number;
}
