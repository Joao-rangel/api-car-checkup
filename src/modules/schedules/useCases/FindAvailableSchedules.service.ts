import {inject, injectable} from 'tsyringe';
import {getHours, isAfter, setHours, startOfDay} from 'date-fns';

import {ISchedulesRepository} from '@modules/schedules/interfaces/ISchedulesRepository';

export interface IAvailableSchedules {
  date: Date;
  available: boolean;
}

@injectable()
export class FindAvailableSchedulesService {
  constructor(
    @inject('SchedulesRepository')
    private schedulesRepository: ISchedulesRepository,
  ) {}

  async execute(date: Date): Promise<IAvailableSchedules[]> {
    const schedules = await this.schedulesRepository.findByDay(date);

    // array de horas possíveis de agendar horário: das 8h às 18h
    const bookingDayHours = Array.from({length: 10}, (_, index) => index + 8);

    const currentDate = new Date();
    const startOfDate = startOfDay(date);

    const availability = bookingDayHours.map((hour) => {
      const isBooked = schedules.find(
        (schedule) => getHours(schedule.date) === hour,
      );

      const compareDate = setHours(startOfDate, hour);

      // disponível se não tem agendamento ou se esta hora ainda não passou
      const available = !isBooked && isAfter(compareDate, currentDate);

      return {date: compareDate, available};
    });

    return availability;
  }
}
