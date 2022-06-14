import { IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto {
  @ApiProperty({ example: 'Post', description: 'title of post' })
  @IsString()
  @IsOptional()
  @Length(2, 25)
  public title: string;

  @ApiProperty({
    example: 'Something text ...',
    description: 'description of post',
  })
  @IsString()
  @IsOptional()
  public description: string;

  @ApiProperty({
    example:
      'avatar/4473d99b2d79016e2bd4610ede3b7ec24pexels-eberhard-grossgasteiger-443446.jpg',
    description: 'image of post',
  })
  @IsString()
  @IsOptional()
  public avatar: string;
}
