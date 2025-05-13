import { Injectable } from '@nestjs/common';
import { CreateVoteCreateDto } from './dto/create-votecreate.dto';
import { UpdateVotecreateDto } from './dto/update-votecreate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VoteCreate } from './entities/votecreate.entity';

@Injectable()
export class VotecreateService {
  constructor(
    @InjectModel(VoteCreate.name) private votecreateModel: Model<VoteCreate>,
  ) {}

  // ✅ Create a new voting proposal
  async create(createVotecreateDto: CreateVoteCreateDto): Promise<VoteCreate> {
    const newProposal = new this.votecreateModel(createVotecreateDto);
    return newProposal.save();
  }

  // ✅ Get all voting proposals
  async findAll(): Promise<VoteCreate[]> {
    return this.votecreateModel.find().exec();
  }

  // ✅ Get a single proposal by ID
  async findOne(id: string): Promise<VoteCreate | null> {
    return this.votecreateModel.findById(id).exec();
  }

  // ✅ Update a proposal by ID
  async update(
    id: string,
    updateVotecreateDto: UpdateVotecreateDto,
  ): Promise<VoteCreate | null> {
    return this.votecreateModel
      .findByIdAndUpdate(id, updateVotecreateDto, { new: true })
      .exec();
  }

  // ✅ Delete a proposal by ID
  async remove(id: string): Promise<void> {
    await this.votecreateModel.findByIdAndDelete(id).exec();
  }
}
