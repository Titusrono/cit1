import { Injectable } from '@nestjs/common';
import { CreateVoteCreateDto } from './dto/create-votecreate.dto';
import { UpdateVotecreateDto } from './dto/update-votecreate.dto';

@Injectable()
export class VotecreateService {
  create(createVotecreateDto: CreateVoteCreateDto) {
    return 'This action adds a new votecreate';
  }

  findAll() {
    return `This action returns all votecreate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} votecreate`;
  }

  update(id: number, updateVotecreateDto: UpdateVotecreateDto) {
    return `This action updates a #${id} votecreate`;
  }

  remove(id: number) {
    return `This action removes a #${id} votecreate`;
  }
}
