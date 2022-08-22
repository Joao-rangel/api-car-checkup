import {User} from '@modules/users/infra/typeorm/User.entity';
import {IUsersRepository} from '@modules/users/interfaces/IUsersRepository';
import {inject, injectable} from 'tsyringe';

@injectable()
export class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(payload: Pick<User, 'name' | 'contact'>): Promise<User> {
    const user = await this.usersRepository.findByContact(payload.contact);

    return user;
  }
}
