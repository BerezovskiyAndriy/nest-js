import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthUserDto } from './dto/auth-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async registration(userDto: CreateUserDto) {
    const findUser = await this.userService.getUserByEmail(userDto.email);
    if (findUser) {
      throw new HttpException('user is already exists', HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(userDto.password, 10);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  async login(authDto: AuthUserDto) {
    const user = await this.validateUser(authDto);
    return this.generateToken(user);
  }

  private generateToken(user: User) {
    const payload = { id: user.id, name: user.name, email: user.email };
    return {
      token: this.jwtService.sign(payload, {
        secret: `${process.env.SECRET_NAME}`,
        expiresIn: '24h',
      }),
    };
  }

  private async validateUser(user: AuthUserDto) {
    let passwordEqual;
    const userFromDb = await this.userService.getUserByEmail(user.email);
    if (userFromDb) {
      passwordEqual = await bcrypt.compare(user.password, userFromDb.password);
    }
    if (!userFromDb || !passwordEqual) {
      throw new UnauthorizedException('wrong passport or email');
    }
    return userFromDb;
  }
}
