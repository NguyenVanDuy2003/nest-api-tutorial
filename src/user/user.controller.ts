import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Car } from 'src/car/schemas/car.schema';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.getAllUser();
  }
  @Get(':id')
  async getUser(
    @Param('id') id: string,
  ): Promise<User> {
    return this.userService.getUser(id);
  }

  @Post()
  async createUser(
    @Body() user: CreateUserDto,
  ): Promise<User> {
    return this.userService.createUser(user);
  }

  @Put(':id')
  async update(
    @Param('id')
    id: string,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(
    @Param('id')
    id: string,
  ) {
    return this.userService.deleteUser(id);
  }

  @Get('user/:userId')
  async getCarByUser(
    @Param('userId') id: string,
  ): Promise<Car[]> {
    return this.userService.getCar(id);
  }
}
