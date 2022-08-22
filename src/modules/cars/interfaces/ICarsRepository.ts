import {Car} from '../infra/typeorm/Car.entity';

export interface ICarsRepository {
  create(user: Pick<Car, 'model' | 'licensePlate'>): Promise<Car>;
  findByLicensePlate(id: Car['licensePlate']): Promise<Car>;
}
