import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {CreateScheduleService} from './CreateScheduleService';

export class CreateScheduleController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
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
    } catch (err) {
      return response
        .status(err?.statusCode || 400)
        .json({message: err?.message});
    }
  }
}
