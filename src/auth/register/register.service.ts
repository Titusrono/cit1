// src/auth/register/register.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateRegisterDto } from './dto/create-register.dto';
import { User, UserDocument } from './entities/register.entity';
import { UpdateRegisterDto } from './dto/update-register.dto';

@Injectable()
export class RegisterService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateRegisterDto: UpdateRegisterDto) {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Hash password
  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  // ✅ Create user method
  async create(createRegisterDto: CreateRegisterDto): Promise<User> {
    const { name, email, password, county } = createRegisterDto;

    // Hash password
    const hashedPassword = await this.hashPassword(password);

    // Save to Mongo
    const newUser = new this.userModel({
      name,
      email,
      password: hashedPassword,
      county,
    });

    return newUser.save();
  }

  // ✅ Find all users
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
