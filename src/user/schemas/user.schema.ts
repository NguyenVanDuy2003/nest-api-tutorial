/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  email: string;

  @Prop()
  username: string;
  @Prop()
  password: string;

  @Prop()
  fullname: string;

  @Prop()
  phone: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
