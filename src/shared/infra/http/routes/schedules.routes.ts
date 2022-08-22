import {Router} from 'express';
import {CreateScheduleController} from '@modules/schedules/useCases/createSchedule/CreateScheduleController';

export const schedulesRouter = Router();

const createScheduleController = new CreateScheduleController();

schedulesRouter.post('/', createScheduleController.handle);
schedulesRouter.get('/available', (_req, res) =>
  res.json({message: 'Horários disponíveis!'}),
);
schedulesRouter.get('/booked', (_req, res) =>
  res.json({message: 'Horários agendados!'}),
);
