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

@Entity('cars')
export class Car {
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
