import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {FindAvailableSchedulesService} from './FindAvailableSchedulesService';

export class FindAvailableSchedulesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {date} = request.query;

    const findAvailableSchedulesService = container.resolve(
      FindAvailableSchedulesService,
    );

    const schedules = await findAvailableSchedulesService.execute(
      date ? new Date(String(date)) : new Date(),
    );

    return response.status(200).json({schedules});
  }
}
