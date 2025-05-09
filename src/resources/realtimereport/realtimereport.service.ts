import { Injectable } from '@nestjs/common';
import { CreateRealtimereportDto } from './dto/create-realtimereport.dto';
import { UpdateRealtimereportDto } from './dto/update-realtimereport.dto';

@Injectable()
export class RealtimereportService {
  create(createRealtimereportDto: CreateRealtimereportDto) {
    return 'This action adds a new realtimereport';
  }

  findAll() {
    return `This action returns all realtimereport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} realtimereport`;
  }

  update(id: number, updateRealtimereportDto: UpdateRealtimereportDto) {
    return `This action updates a #${id} realtimereport`;
  }

  remove(id: number) {
    return `This action removes a #${id} realtimereport`;
  }
}
