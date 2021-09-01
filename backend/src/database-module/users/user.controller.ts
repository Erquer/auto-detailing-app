import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getUser(): string {
    return 'Tutaj będą jusery';
  }
}
