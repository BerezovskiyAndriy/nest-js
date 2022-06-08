import { IsString, Length } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  @Length(2, 25)
  public title: string;

  @IsString()
  public description: string;
}
