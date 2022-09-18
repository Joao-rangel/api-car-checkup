import {IUser} from '@modules/users/interfaces/IUser';
import {ISchedule} from '@modules/schedules/interfaces/ISchedule';

export interface ICar {
  id: number;
  model: string;
  licensePlate: string;
  user: IUser;
  schedules: ISchedule[];
  createdAt: Date;
  updatedAt: Date;
}
