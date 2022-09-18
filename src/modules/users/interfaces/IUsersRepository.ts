import {IUser} from './IUser';

export interface IUsersRepository {
  create(user: Pick<IUser, 'name' | 'contact'>): Promise<IUser>;
  findByContact(id: IUser['contact']): Promise<IUser>;
}
