import {UsersRepository} from '@modules/users/infra/typeorm/UsersRepository';
import {IUsersRepository} from '@modules/users/interfaces/IUsersRepository';
import {container} from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
