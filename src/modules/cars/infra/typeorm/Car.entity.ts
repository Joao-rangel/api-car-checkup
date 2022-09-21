import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {User} from '@modules/users/infra/typeorm/User.entity';
import {Schedule} from '@modules/schedules/infra/typeorm/Schedule.entity';
import {ICar} from '@modules/cars/interfaces/ICar';
import {IUser} from '@modules/users/interfaces/IUser';
import {ISchedule} from '@modules/schedules/interfaces/ISchedule';

@Entity('cars')
export class Car implements ICar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  licensePlate: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'userId'})
  user: IUser;

  @OneToMany(() => Schedule, (schedule) => schedule.car)
  @JoinColumn()
  schedules: ISchedule[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
