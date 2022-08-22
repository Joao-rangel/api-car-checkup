import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {CreateScheduleService} from './CreateScheduleService';

export class CreateScheduleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {user, car, date} = request.body;

    const createScheduleService = container.resolve(CreateScheduleService);

    const schedule = await createScheduleService.execute({
      user,
      car,
      date,
    });

    return response.status(201).json({schedule});
  }
}
