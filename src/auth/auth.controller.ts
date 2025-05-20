import { Controller, Post, Body, Param, Delete, Patch, Get, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateRegisterDto } from './register/dto/create-register.dto';
import { CreateLoginDto } from './login/dto/create-login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Register a new user
  @Post('register')
  async create(@Body() createRegisterDto: CreateRegisterDto) {
    try {
      const user = await this.authService.create(createRegisterDto);
      return { message: 'Registration successful', user };
    } catch (error) {
      return { message: error.message || 'Registration failed' };
    }
  }

  // Login route — updated to ensure only registered users can log in
  @Post('login')
  async login(@Body() createLoginDto: CreateLoginDto) {
    try {
      const { token, message } = await this.authService.validateUser(createLoginDto);

      if (!token) {
        throw new UnauthorizedException('Invalid email or password');
      }

      return { message, token };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException(error.message || 'Login failed');
    }
  }
  // Fetch all users (optional)
  @Get()
  findAll() {
    return this.authService.findAll();
  }

  // Get one user by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  // Update a user
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  // Delete a user
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }

  // Placeholder for reset/forgot password if needed
  // @Post('forgot-password')
  // async forgotPassword(@Body() body: ForgotPasswordDto) {
  //   return this.authService.forgotPassword(body.email);
  // }

  // @Post('reset-password')
  // async resetPassword(@Body() body: ResetPasswordDto) {
  //   return this.authService.resetPassword(body.token, body.newPassword);
  // }
}
