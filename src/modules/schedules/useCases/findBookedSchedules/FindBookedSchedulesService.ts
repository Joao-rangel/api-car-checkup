import {ISchedulesRepository} from '@modules/schedules/interfaces/ISchedulesRepository';
import {inject, injectable} from 'tsyringe';
import {Schedule} from '@modules/schedules/infra/typeorm/Schedule.entity';

export enum PeriodType {
  day = 'day',
  week = 'week',
  month = 'month',
}

interface IRequest {
  date: Date;
  period: PeriodType;
}

@injectable()
export class FindBookedSchedulesService {
  constructor(
    @inject('SchedulesRepository')
    private schedulesRepository: ISchedulesRepository,
  ) {}

  async execute({date, period}: IRequest): Promise<Schedule[]> {
    const periodResolver = {
      day: 'findByDay',
      week: 'findByWeek',
      month: 'findByMonth',
    }[period];

    const schedules = await this.schedulesRepository[periodResolver](date);

    return schedules;
  }
}
