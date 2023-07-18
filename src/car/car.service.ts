import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Car } from './schemas/car.schema';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private carModel: mongoose.Model<Car>) {}
  async getAllCar(): Promise<Car[]> {
    const Cars = await this.carModel.find();
    return Cars;
  }

  async createCar(car: Car): Promise<Car> {
    const Car = await this.carModel.create(car);
    return Car;
  }

  async updateCar(id: string, car: Car): Promise<Car> {
    const Car = await this.carModel.findByIdAndUpdate(id, car, {
      new: true,
      runValidators: true,
    });
    return Car;
  }

  async deleteCar(id: string): Promise<Car> {
    const Car = await this.carModel.findByIdAndDelete(id);
    return Car;
  }
}
