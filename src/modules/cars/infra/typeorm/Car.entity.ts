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
  user: User;

  @OneToMany(() => Schedule, (schedule) => schedule.car)
  @JoinColumn()
  schedules: Schedule[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
