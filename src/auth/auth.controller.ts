import { Controller, Post, Body, Param, Delete, Patch, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';  // You may use this in your registration route
import { CreateLoginDto } from './login/dto/create-login.dto';  // Import CreateLoginDto for login
import { UpdateAuthDto } from './dto/update-auth.dto';
//import { JwtPayload } from './dto/jwt-payload.dto'; // Import JwtPayload DTO

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Register a new user
  @Post('register')
  async create(@Body() createAuthDto: CreateAuthDto) {
    try {
      // Call the registration service to create the new user
      const user = await this.authService.create(createAuthDto);
      return { message: 'Registration successful', user };
    } catch (error) {
      return { message: error.message || 'Registration failed' };
    }
  }

  // Login route
  @Post('login')
  async login(@Body() createLoginDto: CreateLoginDto) {
    try {
      // Validate user credentials and return a token
      const { token, message } = await this.authService.validateUser(createLoginDto);

      // Return the token in the response
      return { message, token };
    } catch (error) {
      return { message: error.message || 'Login failed' };
    }
  }

  // Optional: Add additional routes for other CRUD operations if necessary
  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
