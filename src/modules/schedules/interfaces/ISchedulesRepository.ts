import {Car} from '@modules/cars/infra/typeorm/Car.entity';
import {User} from '@modules/users/infra/typeorm/User.entity';
import {Schedule} from '../infra/typeorm/Schedule.entity';

export interface ICreateSchedulesDTO {
  user: Pick<User, 'name' | 'contact'>;
  car: Pick<Car, 'model' | 'licensePlate'>;
  date: Date;
}

export interface ISchedulesRepository {
  create(payload: ICreateSchedulesDTO): Promise<Schedule>;
  findByDate(date: Date): Promise<Schedule>;
  findByDay(date: Date): Promise<Schedule[]>;
}
