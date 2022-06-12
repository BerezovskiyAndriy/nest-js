import {
  IsBoolean,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'User', description: 'name of user' })
  @IsNotEmpty()
  @IsString()
  @Length(2, 15)
  public name: string;

  @ApiProperty({ example: 'user@gmail.com', description: 'email of user' })
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @ApiProperty({ example: 20, description: 'age of user' })
  @IsNumber()
  public age: number;

  @ApiProperty({ example: 'Odessa', description: 'city of user' })
  @IsString()
  public city: string;

  @ApiProperty({ example: true, description: 'status' })
  @IsBoolean()
  public status: boolean;

  @ApiProperty({ example: 'qwe123', description: 'password of user' })
  @IsNotEmpty()
  @IsString()
  @Length(4, 15)
  readonly password: string;
}
