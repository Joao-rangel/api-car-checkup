import {Car} from '@modules/cars/infra/typeorm/Car.entity';
import {Schedule} from '../infra/typeorm/Schedule.entity';

export interface ICreateSchedulesDTO {
  car: Pick<Car, 'id'>;
  date: Date;
}

export interface ISchedulesRepository {
  create(payload: ICreateSchedulesDTO): Promise<Schedule>;
  findByDate(date: Date): Promise<Schedule>;
  findByDay(date: Date): Promise<Schedule[]>;
}
