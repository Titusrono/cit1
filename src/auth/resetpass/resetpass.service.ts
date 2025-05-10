import { Injectable } from '@nestjs/common';
import { CreateResetpassDto } from './dto/create-resetpass.dto';
import { UpdateResetpassDto } from './dto/update-resetpass.dto';

@Injectable()
export class ResetpassService {
  create(createResetpassDto: CreateResetpassDto) {
    return 'This action adds a new resetpass';
  }

  findAll() {
    return `This action returns all resetpass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resetpass`;
  }

  update(id: number, updateResetpassDto: UpdateResetpassDto) {
    return `This action updates a #${id} resetpass`;
  }

  remove(id: number) {
    return `This action removes a #${id} resetpass`;
  }
}
