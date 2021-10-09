import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  async getUser(): Promise<string> {
    return 'Tutaj będą jusery';
  }
  @Get('/all')
  async getAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Post('/addUser')
  async addUser(
    @Body() user: { firstName: string; password: string },
  ): Promise<User> {
    return this.userService.add(user.firstName, user.password);
  }
  @Post('/login')
  async login(
    @Body() user: { firstName: string; password: string },
  ): Promise<boolean> {
    console.log(user.firstName, user.password);
    const userToLogin = await this.userService.findByName(user.firstName);
    return user.password === userToLogin.password;
  }
}
