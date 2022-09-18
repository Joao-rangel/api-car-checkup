import {ICar} from '@modules/cars/interfaces/ICar';

export interface ICreateSchedulesDTO {
  car: Pick<ICar, 'id'>;
  date: Date;
}
