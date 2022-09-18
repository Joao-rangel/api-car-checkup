import {IUser} from '@modules/users/interfaces/IUser';

export interface ICreateCar {
  model: string;
  licensePlate: string;
  user: IUser;
}
