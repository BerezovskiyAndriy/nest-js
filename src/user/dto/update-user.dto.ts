import { IsNumber, IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @Length(2, 15)
  public name: string;

  @IsNumber()
  @Length(18, 100)
  public age: number;

  @IsString()
  public city: string;
}
