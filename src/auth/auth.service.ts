import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt'; 
import { CreateLoginDto } from './login/dto/create-login.dto';
import { User, UserDocument } from './register/entities/register.entity';
import { JwtPayload } from 'jsonwebtoken';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateAuthDto } from './dto/create-auth.dto';
//import { JwtPayload } from './dto/jwt-payload.dto'; // Import JwtPayload DTO

@Injectable()
export class AuthService {
  create(createAuthDto: CreateAuthDto) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateAuthDto: UpdateAuthDto) {
    throw new Error('Method not implemented.');
  }
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly jwtService: JwtService
  ) {}

    async validateUser(createLoginDto: CreateLoginDto) {
      const { email, password } = createLoginDto;

      // Find user by email
      const user = await this.userModel.findOne({ email });

      if (!user) {
        throw new UnauthorizedException('Invalid email or password');
      }

      // Compare password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid email or password');
      }

      // Create the JWT payload
      const payload: JwtPayload = { email: user.email, name: user.name, id: user._id?.toString() || user.id };

      // Sign and return the token
      const token = this.jwtService.sign(payload);

      return {
        message: 'Login successful',
        token,
      };
    }}
