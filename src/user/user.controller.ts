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
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { GetUserDto } from './dto/get-user.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'get all users' })
  @ApiResponse({ status: 200, type: GetUserDto })
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @ApiOperation({ summary: 'get one users' })
  @ApiResponse({ status: 200, type: GetUserDto })
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getOneUserById(@Param('id') id: string) {
    return this.userService.getOneById(id);
  }

  @ApiOperation({ summary: 'create user' })
  @ApiResponse({ status: 200, type: GetUserDto })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @ApiOperation({ summary: 'update field of user' })
  @ApiResponse({ status: 200, type: UpdateUserDto })
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
