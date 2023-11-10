import { ApiProperty, PickType } from '@nestjs/swagger';
import { UserDto } from './user.dto';

export class UpdateUserDto extends PickType(UserDto, [
  'name',
  'password',
] as const) {
  @ApiProperty()
  confirmPassword: string;
}
