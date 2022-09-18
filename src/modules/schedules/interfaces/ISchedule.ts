import {ICar} from '@modules/cars/interfaces/ICar';

export interface ISchedule {
  id: number;
  date: Date;
  car: ICar;
  createdAt: Date;
  updatedAt: Date;
}
