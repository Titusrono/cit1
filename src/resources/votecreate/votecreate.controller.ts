import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VotecreateService } from './votecreate.service';
import { CreateVoteCreateDto } from './dto/create-votecreate.dto';
import { UpdateVotecreateDto } from './dto/update-votecreate.dto';

@Controller('votecreate')
export class VotecreateController {
  constructor(private readonly votecreateService: VotecreateService) {}

  // ✅ Create a new voting proposal
  @Post()
  async create(@Body() createVotecreateDto: CreateVoteCreateDto) {
    return await this.votecreateService.create(createVotecreateDto);
  }

  // ✅ Get all proposals
  @Get()
  async findAll() {
    return await this.votecreateService.findAll();
  }

  // ✅ Get single proposal by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.votecreateService.findOne(id);
  }

  // ✅ Update proposal by ID
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVotecreateDto: UpdateVotecreateDto) {
    return await this.votecreateService.update(id, updateVotecreateDto);
  }

  // ✅ Delete proposal by ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.votecreateService.remove(id);
  }

  // ✅ Vote on a proposal
  @Post(':id/vote')
  async vote(
    @Param('id') id: string,
    @Body() body: { vote: 'yes' | 'no' }
  ) {
    return await this.votecreateService.vote(id, body.vote);
  }
}
