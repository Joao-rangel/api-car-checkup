import {User} from '../infra/typeorm/User.entity';

export interface IUsersRepository {
  create(user: Pick<User, 'name' | 'contact'>): Promise<User>;
  findByContact(id: User['contact']): Promise<User>;
}
