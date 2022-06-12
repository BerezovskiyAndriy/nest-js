import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto {
  @ApiProperty({ example: 'Post', description: 'title of post' })
  @IsString()
  @Length(2, 25)
  public title: string;

  @ApiProperty({
    example: 'Something text ...',
    description: 'description of post',
  })
  @IsString()
  public description: string;
}
