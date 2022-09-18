import {Car} from '@modules/cars/infra/typeorm/Car.entity';
import {ICar} from '@modules/cars/interfaces/ICar';
import {IUser} from '@modules/users/interfaces/IUser';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  contact: number;

  @OneToMany(() => Car, (car) => car.user)
  @JoinColumn()
  cars: ICar[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
