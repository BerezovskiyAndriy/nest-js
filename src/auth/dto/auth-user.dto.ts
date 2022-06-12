import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class AuthUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'email of user' })
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @ApiProperty({ example: 'qwe123', description: 'password of user' })
  @IsNotEmpty()
  @IsString()
  @Length(4, 15)
  public password: string;
}
