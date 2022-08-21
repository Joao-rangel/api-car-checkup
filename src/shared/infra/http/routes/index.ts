import {Router} from 'express';
import {schedulesRouter} from './schedules.routes';

export const router = Router();

router.use('/schedules', schedulesRouter);
