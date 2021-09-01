import { Entity, Column, PrimaryGeneratedColumn, Unique, Check } from 'typeorm';

@Entity()
@Unique(['firstName', 'lastName'])
@Check(`'salary > 0'`)
@Check(`'workTime' > 0 AND 'workTime' < 8`)
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
  workTime: number;
}
