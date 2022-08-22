import {
  ICreateSchedulesDTO,
  ISchedulesRepository,
} from '@modules/schedules/interfaces/ISchedulesRepository';
import {appDataSource} from '@shared/infra/typeorm/data-source';
import {Repository} from 'typeorm';
import {Schedule} from './Schedule.entity';

export class SchedulesRepository implements ISchedulesRepository {
  private repository: Repository<Schedule>;

  constructor() {
    this.repository = appDataSource.getRepository(Schedule);
  }
  create(payload: ICreateSchedulesDTO): Promise<Schedule> {
    throw new Error('Method not implemented.');
  }

  // async create({
  //   carId,
  //   expected_return_date,
  //   userId,
  //   id,
  //   end_date,
  //   total,
  //   // }: ICreateScheduleDTO): Promise<Schedule> {
  // }): Promise<Schedule> {
  //   const Schedule = this.repository.create({
  //     // carId,
  //     // expected_return_date,
  //     // userId,
  //     // id,
  //     // end_date,
  //     // total,
  //   });

  //   await this.repository.save(Schedule);

  //   return Schedule;
  // }

  async find(): Promise<Schedule[]> {
    const schedule = await this.repository.find({
      relations: ['car', 'car.user'],
    });

    return schedule;
  }

  // async findById(id: number): Promise<Schedule> {
  //   const Schedule = await this.repository.findOne(id);
  //   return Schedule;
  // }

  // async findByUser(userId: number): Promise<Schedule[]> {
  //   const Schedules = await this.repository.find({
  //     where: {userId},
  //     relations: ['car'],
  //   });

  //   return Schedules;
  // }
}
