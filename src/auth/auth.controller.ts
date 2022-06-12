import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthUserDto } from './dto/auth-user.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'registration user' })
  @ApiOkResponse({
    status: 201,
    schema: {
      example: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
          'eyJpZCI6MTMsIm5hbWUiOiJBbmRmNHJpZHkiLCJlbWFpbCI6IndxdGhydHNxQGdtYWlsLmNvbSIsImlhdCI6MTY1NTA0MjczMSwiZXhwIjoxNjU1MTI5MTMxfQ.' +
          'Eod-5IXporye1l-Q6M78hJlKEGCFQx-_1q_Em9A57iU',
      },
    },
  })
  @HttpCode(HttpStatus.FORBIDDEN)
  @Post('/registration')
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }

  @ApiOperation({ summary: 'login user' })
  @ApiOkResponse({
    status: 201,
    schema: {
      example: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
          'eyJpZCI6MTMsIm5hbWUiOiJBbmRmNHJpZHkiLCJlbWFpbCI6IndxdGhydHNxQGdtYWlsLmNvbSIsImlhdCI6MTY1NTA0Mjg0NCwiZXhwIjoxNjU1MTI5MjQ0fQ.' +
          'JuqbmeY_iRGDHuHk2eUWNJwB4YORQF2YZXTklsguatM',
      },
    },
  })
  @HttpCode(HttpStatus.UNAUTHORIZED)
  @Post('/login')
  login(@Body() authDto: AuthUserDto) {
    return this.authService.login(authDto);
  }
}
