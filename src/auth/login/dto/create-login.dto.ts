// src/auth/login/dto/create-login.dto.ts
import { IsEmail, IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class CreateLoginDto {
  @IsEmail()
  @IsNotEmpty({ message: 'Email cannot be empty' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password cannot be empty' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @MaxLength(20, { message: 'Password cannot exceed 20 characters' })
  password: string;
}
