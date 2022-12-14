import {Repository, Raw} from 'typeorm';
import {format} from 'date-fns';

import {appDataSource} from '@shared/infra/typeorm/data-source';
import {ISchedulesRepository} from '@modules/schedules/interfaces/ISchedulesRepository';
import {ICreateSchedulesDTO} from '@modules/schedules/interfaces/ICreateSchedulesDTO';
import {ISchedule} from '@modules/schedules/interfaces/ISchedule';
import {Schedule} from './Schedule.entity';

export class SchedulesRepository implements ISchedulesRepository {
  private repository: Repository<ISchedule>;

  constructor() {
    this.repository = appDataSource.getRepository(Schedule);
  }

  async findByDate(date: Date): Promise<ISchedule> {
    const parsedDate = format(date, 'dd-MM-yyyy,HH:mm');

    const schedule = await this.repository.findOne({
      where: {
        date: Raw(
          (date) => `to_char(${date}, 'DD-MM-YYYY,HH24:MI') = '${parsedDate}'`,
        ),
      },
    });

    return schedule;
  }

  async findByDay(date: Date): Promise<ISchedule[]> {
    const parsedDate = format(date, 'dd-MM-yyyy');

    const schedules = await this.repository.find({
      where: {
        date: Raw((date) => `to_char(${date}, 'DD-MM-YYYY') = '${parsedDate}'`),
      },
    });

    return schedules;
  }

  async findByWeek(date: Date): Promise<ISchedule[]> {
    const parsedDate = format(date, 'ww-yyyy');

    const schedules = await this.repository.find({
      where: {
        date: Raw((date) => `to_char(${date}, 'WW-YYYY') = '${parsedDate}'`),
      },
    });

    return schedules;
  }

  async findByMonth(date: Date): Promise<ISchedule[]> {
    const parsedDate = format(date, 'MM-yyyy');

    const schedules = await this.repository.find({
      where: {
        date: Raw((date) => `to_char(${date}, 'MM-YYYY') = '${parsedDate}'`),
      },
    });

    return schedules;
  }

  async create({date, car}: ICreateSchedulesDTO): Promise<ISchedule> {
    const schedule = this.repository.create({date, car});

    await this.repository.save(schedule);

    return schedule;
  }

  async findAvailable(date: Date): Promise<ISchedule> {
    const schedule = await this.repository.findOne({where: {date}});

    return schedule;
  }
}
