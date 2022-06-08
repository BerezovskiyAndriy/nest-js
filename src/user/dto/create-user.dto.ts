import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 15)
  public name: string;

  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNumber()
  @Length(18, 100)
  public age: number;

  @IsString()
  public city: string;

  @IsBoolean()
  public status: boolean;

  @IsNotEmpty()
  @IsString()
  @Length(4, 15)
  readonly password: string;
}
