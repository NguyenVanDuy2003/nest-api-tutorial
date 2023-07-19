import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './schemas/user.schema';
import { Car } from 'src/car/schemas/car.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
    @InjectModel(Car.name)
    private carModel: mongoose.Model<Car>,
  ) {}

  async getAllUser(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
  async findOne(username: string): Promise<any> {
    const res = await this.userModel.findOne({
      username: username,
    });
    return res;
  }

  async getUser(id: string): Promise<User> {
    const user = await this.userModel.findById(
      id,
    );
    if (!user) {
      throw new NotFoundException(
        'user not found.',
      );
    }
    return user;
  }

  async createUser(user: User): Promise<any> {
    const hash: any = await bcrypt.hash(
      user.password,
      10,
    );
    user.password = hash;
    const res = this.userModel.create(user);

    return res;
  }
  async updateUser(
    id: string,
    user: User,
  ): Promise<User> {
    const res =
      await this.userModel.findByIdAndUpdate(
        id,
        user,
        {
          new: true,
          runValidators: true,
        },
      );
    return res;
  }

  async deleteUser(id: string) {
    const res =
      await this.userModel.findByIdAndDelete(id);
    return res;
  }

  async getCar(id: string): Promise<Car[]> {
    const res = await this.carModel.find({
      userId: id,
    });
    return res;
  }
}
