import {CarsRepository} from '@modules/cars/infra/typeorm/CarsRepository';
import {ICarsRepository} from '@modules/cars/interfaces/ICarsRepository';
import {SchedulesRepository} from '@modules/schedules/infra/typeorm/SchedulesRepository';
import {ISchedulesRepository} from '@modules/schedules/interfaces/ISchedulesRepository';
import {UsersRepository} from '@modules/users/infra/typeorm/UsersRepository';
import {IUsersRepository} from '@modules/users/interfaces/IUsersRepository';
import {container} from 'tsyringe';

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);

container.registerSingleton<ISchedulesRepository>(
  'SchedulesRepository',
  SchedulesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
