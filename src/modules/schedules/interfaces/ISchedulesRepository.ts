import {ISchedule} from './ISchedule';
import {ICreateSchedulesDTO} from './ICreateSchedulesDTO';

export interface ISchedulesRepository {
  create(payload: ICreateSchedulesDTO): Promise<ISchedule>;
  findByDate(date: Date): Promise<ISchedule>;
  findByDay(date: Date): Promise<ISchedule[]>;
  findByWeek(date: Date): Promise<ISchedule[]>;
  findByMonth(date: Date): Promise<ISchedule[]>;
}
