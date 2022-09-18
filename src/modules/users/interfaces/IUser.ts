import {ICar} from '@modules/cars/interfaces/ICar';

export interface IUser {
  id: number;
  name: string;
  contact: number;
  cars: ICar[];
  createdAt: Date;
  updatedAt: Date;
}
