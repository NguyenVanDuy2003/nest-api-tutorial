import { Injectable } from '@nestjs/common';
import { User } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(
    username: string,
    password: string,
  ): Promise<any> {
    const user = await this.userService.findOne(
      username,
    );

    const hash = await bcrypt.compare(
      password,
      user.password,
    );
    if (user && hash === true) {
      const { password, username, ...rest } =
        user;

      delete rest._doc.password;
      delete rest._doc.createdAt;
      delete rest._doc.updatedAt;
      console.log(rest._doc);

      const accessToken =
        await this.jwtService.signAsync(
          rest._doc,
        );

      return {
        accessToken,
        user: rest._doc,
      };
    }

    return null;
  }
}
