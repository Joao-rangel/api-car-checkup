import {ISchedulesRepository} from '@modules/schedules/interfaces/ISchedulesRepository';
import {AppError} from '@shared/errors/AppError';
import {inject, injectable} from 'tsyringe';
import {isAfter} from 'date-fns';
import {ICarsRepository} from '@modules/cars/interfaces/ICarsRepository';
import {IUsersRepository} from '@modules/users/interfaces/IUsersRepository';
import {Schedule} from '../infra/typeorm/Schedule.entity';

interface ICreateSchedule {
  name: string;
  contact: number;
  model: string;
  licensePlate: string;
  date: Date;
}

@injectable()
export class CreateScheduleService {
  constructor(
    @inject('SchedulesRepository')
    private schedulesRepository: ISchedulesRepository,
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    contact,
    model,
    licensePlate,
    date,
  }: ICreateSchedule): Promise<Schedule> {
    if (isAfter(new Date(), date)) {
      throw new AppError('Não é possível agendar em uma data que já passou.');
    }

    const isScheduled = await this.schedulesRepository.findByDate(date);
    if (isScheduled) {
      throw new AppError('Este horário já está reservado.');
    }

    let user = await this.usersRepository.findByContact(contact);
    if (!user) {
      user = await this.usersRepository.create({name, contact});
    }

    let car = await this.carsRepository.findByLicensePlate(licensePlate);
    if (!car) {
      car = await this.carsRepository.create({
        model,
        licensePlate,
        user,
      });
    }

    const schedule = await this.schedulesRepository.create({date, car});

    return schedule;
  }
}
