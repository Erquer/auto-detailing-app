import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  findByName(username: string): Promise<User> {
    return this.usersRepository.findOne({ firstName: username });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async add(username: string, password: string): Promise<User> {
    const user = new User();
    user.firstName = username;
    user.password = password;
    return this.usersRepository.save(user);
  }
}
