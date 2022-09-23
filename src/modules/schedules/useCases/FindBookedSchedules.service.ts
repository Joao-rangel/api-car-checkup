import {inject, injectable} from 'tsyringe';

import {AppError} from '@shared/errors/AppError';
import {ISchedulesRepository} from '@modules/schedules/interfaces/ISchedulesRepository';
import {ISchedule} from '../interfaces/ISchedule';

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

  async execute({date, period}: IRequest): Promise<ISchedule[]> {
    if (!period) throw new AppError('Período selecionado não disponível.');

    const periodResolver = {
      day: 'findByDay',
      week: 'findByWeek',
      month: 'findByMonth',
    }[period];

    const schedules = await this.schedulesRepository[periodResolver](date);

    return schedules;
  }
}
