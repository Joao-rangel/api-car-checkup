import {IUsersRepository} from '@modules/users/interfaces/IUsersRepository';
import {appDataSource} from '@shared/infra/typeorm/data-source';
import {Repository} from 'typeorm';
import {User} from './User.entity';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = appDataSource.getRepository(User);
  }

  async findByContact(contact: User['contact']): Promise<User> {
    const user = await this.repository.findOne({where: {contact}});

    return user;
  }

  async create({name, contact}: Pick<User, 'name' | 'contact'>): Promise<User> {
    const user = this.repository.create({name, contact});

    await this.repository.save(user);

    return user;
  }
}
