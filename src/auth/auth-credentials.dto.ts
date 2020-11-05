import { IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  username: string;

  @IsString()
  @MinLength(8, { message: 'password is too short' })
  @MaxLength(20, { message: 'password is to long' })
  password: string;
}
