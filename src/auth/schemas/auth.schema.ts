/* eslint-disable prettier/prettier */
import {
  Schema,
  Prop,
  SchemaFactory,
} from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Auth {
  @Prop()
  username: string;
  @Prop()
  password: string;
}

export const AuthSchema =
  SchemaFactory.createForClass(Auth);
