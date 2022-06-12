import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto extends CreateUserDto {
  @ApiProperty({ example: 1, description: 'id of user' })
  public id: number;
}
