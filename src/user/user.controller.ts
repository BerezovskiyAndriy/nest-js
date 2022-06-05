import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getAll(): Array<UserDto> {
    return this.userService.getAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getOneUserById(@Param('id') id: string) {
    return this.userService.getOneById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() userDto: UserDto) {
    return this.userService.createUser(userDto);
  }

  @HttpCode(HttpStatus.OK)
  @Put('/:id')
  updateUserById(@Param('id') id: string, @Body() userDto: UserDto) {
    return this.userService.updateUserById(id, userDto);
  }

  @HttpCode(HttpStatus.BAD_REQUEST)
  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deletedUser(id);
  }
}
