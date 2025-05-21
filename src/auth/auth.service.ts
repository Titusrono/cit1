import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { CreateLoginDto } from './login/dto/create-login.dto';
import { User, UserDocument } from './register/entities/register.entity';
import { JwtPayload } from 'jsonwebtoken';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateRegisterDto } from './register/dto/create-register.dto'; // ✅ correct DTO path

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  // ✅ REGISTER new user with default role = 'user'
  async create(createRegisterDto: CreateRegisterDto) {
    const { email, password, name, county } = createRegisterDto;

    // Check if user already exists
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user with role defaulted to 'user'
    const newUser = new this.userModel({
      name,
      email,
      password: hashedPassword,
      county,
      role: 'user', // default role
    });

    const savedUser = await newUser.save();

    return {
      message: 'Registration successful',
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        county: savedUser.county,
        role: savedUser.role,
      },
    };
  }

  // ✅ LOGIN only existing registered users, return role in token payload
  async validateUser(createLoginDto: CreateLoginDto) {
    const { email, password } = createLoginDto;

    // Find user by email
    const user = await this.userModel.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Generate JWT token including role
    const payload: JwtPayload = {
      email: user.email,
      name: user.name,
      id: user._id?.toString() || user.id?.toString(),
      role: user.role, // add role here
    };

    const token = this.jwtService.sign(payload);

    return {
      message: 'Login successful',
      token,
      role: user.role, // optionally return role explicitly
    };
  }

  // Optional: Get all users (admin use)
  async findAll() {
    return await this.userModel.find().select('-password');
  }

  // Optional: Get a single user by ID
  async findOne(id: number) {
    const user = await this.userModel.findById(id).select('-password');
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // Optional: Update user
  async update(id: number, updateAuthDto: UpdateAuthDto) {
    const updated = await this.userModel.findByIdAndUpdate(id, updateAuthDto, {
      new: true,
    });
    if (!updated) {
      throw new NotFoundException('User not found');
    }
    return updated;
  }

  // Optional: Remove user
  async remove(id: number) {
    const deleted = await this.userModel.findByIdAndDelete(id);
    if (!deleted) {
      throw new NotFoundException('User not found');
    }
    return { message: 'User deleted successfully' };
  }
}
