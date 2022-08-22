import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {
  FindBookedSchedulesService,
  PeriodType,
} from './FindBookedSchedulesService';

export class FindBookedSchedulesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {date, period = PeriodType.day} = request.query;

    const findBookedSchedulesService = container.resolve(
      FindBookedSchedulesService,
    );

    const schedules = await findBookedSchedulesService.execute({
      date: date ? new Date(String(date)) : new Date(),
      period: PeriodType[String(period)],
    });

    return response.status(200).json({schedules});
  }
}
