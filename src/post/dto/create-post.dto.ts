import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'Post', description: 'title of post' })
  @IsNotEmpty()
  @IsString()
  @Length(2, 25)
  public title: string;

  @ApiProperty({
    example: 'Something text ...',
    description: 'description of user',
  })
  @IsNotEmpty()
  @IsString()
  public description: string;

  @IsString()
  @IsOptional()
  public avatar: string;
}
