import { Injectable } from '@nestjs/common';
import { CreateForgotpassDto } from './dto/create-forgotpass.dto';
import { UpdateForgotpassDto } from './dto/update-forgotpass.dto';

@Injectable()
export class ForgotpassService {
  create(createForgotpassDto: CreateForgotpassDto) {
    return 'This action adds a new forgotpass';
  }

  findAll() {
    return `This action returns all forgotpass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} forgotpass`;
  }

  update(id: number, updateForgotpassDto: UpdateForgotpassDto) {
    return `This action updates a #${id} forgotpass`;
  }

  remove(id: number) {
    return `This action removes a #${id} forgotpass`;
  }
}
