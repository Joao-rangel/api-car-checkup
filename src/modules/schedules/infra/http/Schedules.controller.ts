import {Request, Response} from 'express';
import {container} from 'tsyringe';

import {CreateScheduleService} from '@modules/schedules/useCases/CreateSchedule.service';
import {FindAvailableSchedulesService} from '@modules/schedules/useCases/FindAvailableSchedules.service';
import {
  PeriodType,
  FindBookedSchedulesService,
} from '@modules/schedules/useCases/FindBookedSchedules.service';

export class SchedulesController {
  async create(request: Request, response: Response): Promise<Response> {
    const {name, contact, model, licensePlate, date} = request.body;

    const parsedDate = new Date(String(date));

    const createScheduleService = container.resolve(CreateScheduleService);

    const schedule = await createScheduleService.execute({
      name,
      contact,
      model,
      licensePlate,
      date: parsedDate,
    });

    return response.status(201).json({schedule});
  }

  async findAvailable(request: Request, response: Response): Promise<Response> {
    const {date} = request.query;

    const useCaseService = container.resolve(FindAvailableSchedulesService);

    const findDate = date ? new Date(String(date)) : new Date();
    const schedules = await useCaseService.execute(findDate);

    return response.json({schedules});
  }

  async findBooked(request: Request, response: Response): Promise<Response> {
    const {date, period = PeriodType.day} = request.query;

    const useCaseService = container.resolve(FindBookedSchedulesService);

    const schedules = await useCaseService.execute({
      date: date ? new Date(String(date)) : new Date(),
      period: PeriodType[String(period)],
    });

    return response.json({schedules});
  }
}
