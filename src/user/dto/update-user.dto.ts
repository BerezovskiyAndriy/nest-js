import { IsNumber, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: 'Odessa', description: 'name of user' })
  @IsString()
  @Length(2, 15)
  public name: string;

  @ApiProperty({ example: 25, description: 'age of user' })
  @IsNumber()
  @Length(18, 100)
  public age: number;

  @ApiProperty({ example: 'Odessa', description: 'city of user' })
  @IsString()
  public city: string;
}
