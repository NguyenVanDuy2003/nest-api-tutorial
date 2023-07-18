/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Car {
  @Prop()
  name: string;

  @Prop()
  properties: string;

  @Prop()
  image: string;

  @Prop()
  fuel: number;

  @Prop()
  driving_mode: string;

  @Prop()
  seats: string;

  @Prop()
  price: number;

  @Prop()
  cost: number;

  @Prop()
  userId: string;

  @Prop()
  heart: boolean;
}

export const CarSchema = SchemaFactory.createForClass(Car);
