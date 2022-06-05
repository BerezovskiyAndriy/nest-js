import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private users = [];

  getAll() {
    return this.users;
  }

  getOneById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  createUser(userDto: UserDto) {
    this.users.push({
      ...userDto,
      id: new Date().valueOf(),
    });
    return userDto;
  }

  updateUserById(id, userDto: UserDto) {
    this.users.find((user) => {
      if (+user.id === +id) {
        user.id = id;
        user.username = userDto.username;
        user.age = userDto.age;
        user.email = userDto.email;
        user.password = userDto.password;
      }
    });
    return this.users;
  }

  deletedUser(id) {
    this.users.filter((user) => user.id !== id);
  }
}
