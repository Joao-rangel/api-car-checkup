import 'reflect-metadata';

import {it, describe, expect, beforeEach, vi} from 'vitest';
import {AppError} from '@shared/errors/AppError';
import {ISchedule} from '../interfaces/ISchedule';
import {ISchedulesRepository} from '../interfaces/ISchedulesRepository';
import {
  FindBookedSchedulesService,
  PeriodType,
} from './FindBookedSchedules.service';

const mockRepository = {
  findByDay: vi.fn().mockResolvedValue([{id: 1} as ISchedule]),
} as unknown as ISchedulesRepository;

describe('CreateUser', () => {
  let findBookedSchedulesService: FindBookedSchedulesService;

  beforeEach(() => {
    findBookedSchedulesService = new FindBookedSchedulesService(mockRepository);
  });

  it('should be able to create a new schedules', async () => {
    const schedules = await findBookedSchedulesService.execute({
      period: PeriodType.day,
      date: new Date(),
    });
    expect(schedules[0]).toHaveProperty('id');
  });

  it('should throw an async error', async () => {
    await expect(
      findBookedSchedulesService.execute({
        period: '' as PeriodType,
        date: new Date(),
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
