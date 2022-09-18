import {IUser} from '@modules/users/interfaces/IUser';
import {IUsersRepository} from '@modules/users/interfaces/IUsersRepository';
import {appDataSource} from '@shared/infra/typeorm/data-source';
import {Repository} from 'typeorm';
import {User} from './User.entity';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<IUser>;

  constructor() {
    this.repository = appDataSource.getRepository(User);
  }

  async findByContact(contact: IUser['contact']): Promise<IUser> {
    const user = await this.repository.findOne({
      where: {contact},
      relations: ['cars'],
    });

    return user;
  }

  async create({
    name,
    contact,
  }: Pick<IUser, 'name' | 'contact'>): Promise<IUser> {
    const user = this.repository.create({name, contact});

    await this.repository.save(user);

    return user;
  }
}
