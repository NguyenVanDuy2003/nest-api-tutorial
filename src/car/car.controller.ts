import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './schemas/car.schema';
import { CreateCarDto } from './dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarController {
  constructor(private carService: CarService) {}
  @Get()
  getAllCar() {
    return this.carService.getAllCar();
  }

  @Post()
  async createCar(@Body() car: CreateCarDto): Promise<Car> {
    return this.carService.createCar(car);
  }
  @Put(':id')
  async updateCar(
    @Param('id') id: string,
    @Body() car: UpdateCarDto,
  ): Promise<Car> {
    return this.carService.updateCar(id, car);
  }

  @Delete(':id')
  async cdeleteCar(@Param('id') id: string): Promise<Car> {
    return this.carService.deleteCar(id);
  }
}
