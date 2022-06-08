import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 25)
  public title: string;

  @IsNotEmpty()
  @IsString()
  public description: string;
}
