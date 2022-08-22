import {ICarsRepository} from '@modules/cars/interfaces/ICarsRepository';
import {appDataSource} from '@shared/infra/typeorm/data-source';
import {Repository} from 'typeorm';
import {Car} from './Car.entity';

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = appDataSource.getRepository(Car);
  }

  async findByLicensePlate(licensePlate: Car['licensePlate']): Promise<Car> {
    const car = await this.repository.findOne({where: {licensePlate}});

    return car;
  }

  async create(payload: Pick<Car, 'model' | 'licensePlate'>): Promise<Car> {
    const car = this.repository.create(payload);

    await this.repository.save(car);

    return car;
  }
}
