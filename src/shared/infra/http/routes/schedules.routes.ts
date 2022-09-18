import {Router} from 'express';
import {SchedulesController} from '@modules/schedules/infra/http/Schedules.controller';

export const schedulesRouter = Router();

const schedulesController = new SchedulesController();

schedulesRouter.post('/', schedulesController.create);
schedulesRouter.get('/available', schedulesController.findAvailable);
schedulesRouter.get('/booked', schedulesController.findBooked);
