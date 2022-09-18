import {ISchedulesRepository} from '@modules/schedules/interfaces/ISchedulesRepository';
import {inject, injectable} from 'tsyringe';
import {Schedule} from '@modules/schedules/infra/typeorm/Schedule.entity';
import {AppError} from '@shared/errors/AppError';

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
    if (!period) throw new AppError('Período seleceionado não disponível.');

    const periodResolver = {
      day: 'findByDay',
      week: 'findByWeek',
      month: 'findByMonth',
    }[period];

    const schedules = await this.schedulesRepository[periodResolver](date);

    return schedules;
  }
}
