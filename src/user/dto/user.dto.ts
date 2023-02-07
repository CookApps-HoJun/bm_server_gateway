import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';

export class UserDto {
  @IsNumber()
  uid: number;

  @IsString()
  region: string;

  @IsString()
  deviceId: string;

  @IsDate()
  joinDate: Date;
}

export class CreateUserDto extends UserDto {}

export class UpdateUserDto {
  id: number;
  nickname: string;
}

export class RemoveUserDto extends UserDto {}
