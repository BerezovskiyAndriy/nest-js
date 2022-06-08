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
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'get all users' })
  @ApiOkResponse({
    status: 200,
    description: 'get array of users',
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @ApiOperation({ summary: 'get one users' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 1,
        email: 'example@gmail.com',
        name: 'userName',
        age: 25,
        city: 'Lviv',
        status: true,
        password: 'qwe123',
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getOneUserById(@Param('id') id: string) {
    return this.userService.getOneById(id);
  }

  @ApiOperation({ summary: 'create user' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        email: 'example@gmail.com',
        name: 'userName',
        age: 20,
        city: 'Kyiv',
        status: false,
        password: 'qwe123',
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @ApiOperation({ summary: 'update field of user' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        name: 'userName',
        email: 'example@gmail.com',
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Put('/:id')
  updateUserById(@Param('id') id: string, @Body() userData: UpdateUserDto) {
    return this.userService.updateUserById(id, userData);
  }

  @ApiOperation({ summary: 'delete user' })
  @HttpCode(HttpStatus.BAD_REQUEST)
  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deletedUser(id);
  }
}
