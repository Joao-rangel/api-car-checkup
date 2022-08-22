import {Router} from 'express';
import {CreateScheduleController} from '@modules/schedules/useCases/createSchedule/CreateScheduleController';
import {FindAvailableSchedulesController} from '@modules/schedules/useCases/findAvailableSchedules/FindAvailableSchedulesController';
import {FindBookedSchedulesController} from '@modules/schedules/useCases/findBookedSchedules/FindBookedSchedulesController';

export const schedulesRouter = Router();

const createScheduleController = new CreateScheduleController();
const findAvailableSchedulesController = new FindAvailableSchedulesController();
const findBookedSchedulesController = new FindBookedSchedulesController();

schedulesRouter.post('/', createScheduleController.handle);
schedulesRouter.get('/available', findAvailableSchedulesController.handle);
schedulesRouter.get('/booked', findBookedSchedulesController.handle);
