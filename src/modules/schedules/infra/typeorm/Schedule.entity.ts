import {Car} from '@modules/cars/infra/typeorm/Car.entity';
import {ICar} from '@modules/cars/interfaces/ICar';
import {ISchedule} from '@modules/schedules/interfaces/ISchedule';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('schedules')
export class Schedule implements ISchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => Car)
  @JoinColumn({name: 'carId'})
  car: ICar;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
