import {ICar} from './ICar';
import {ICreateCar} from './ICreateCar';

export interface ICarsRepository {
  create(user: ICreateCar): Promise<ICar>;
  findByLicensePlate(id: ICar['licensePlate']): Promise<ICar>;
}
