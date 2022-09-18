import {Repository} from 'typeorm';

import {appDataSource} from '@shared/infra/typeorm/data-source';
import {ICar} from '@modules/cars/interfaces/ICar';
import {ICarsRepository} from '@modules/cars/interfaces/ICarsRepository';
import {ICreateCar} from '@modules/cars/interfaces/ICreateCar';
import {Car} from './Car.entity';

export class CarsRepository implements ICarsRepository {
  private repository: Repository<ICar>;

  constructor() {
    this.repository = appDataSource.getRepository(Car);
  }

  async findByLicensePlate(licensePlate: ICar['licensePlate']): Promise<ICar> {
    const car = await this.repository.findOne({where: {licensePlate}});

    return car;
  }

  async create(payload: ICreateCar): Promise<ICar> {
    const car = this.repository.create(payload);

    await this.repository.save(car);

    return car;
  }
}
