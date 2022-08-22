import {User} from '@modules/users/infra/typeorm/User.entity';
import {Car} from '../infra/typeorm/Car.entity';

export interface ICreateCar {
  model: string;
  licensePlate: string;
  user: User;
}

export interface ICarsRepository {
  create(user: ICreateCar): Promise<Car>;
  findByLicensePlate(id: Car['licensePlate']): Promise<Car>;
}
