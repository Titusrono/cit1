import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Match } from './match.decorator';  // ✅ Correct relative import

export class CreateRegisterDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'Confirm Password is required' })
  @Match('password', { message: 'Passwords do not match' })  // ✅ Password match validation
  confirmPassword: string;

  @IsString()
  @IsNotEmpty({ message: 'County is required' })
  county: string;
}
