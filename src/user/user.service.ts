import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: mongoose.Model<User>,
  ) {}

  async getAllUser(): Promise<User[]> {
    const users = this.userModel.find();
    return users;
  }

  async createUser(user: User): Promise<User> {
    const res = this.userModel.create(user);
    return res;
  }
}
