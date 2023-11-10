import { ApiProperty, PickType } from '@nestjs/swagger';
import { UserDto } from './user.dto';

export class CreateUserDto extends PickType(UserDto, [
  'name',
  'email',
  'password',
] as const) {
  @ApiProperty()
  confirmPassword: string;
}