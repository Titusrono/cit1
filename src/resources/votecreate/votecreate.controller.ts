import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VotecreateService } from './votecreate.service';
import { CreateVoteCreateDto } from './dto/create-votecreate.dto';
import { UpdateVotecreateDto } from './dto/update-votecreate.dto';

@Controller('votecreate')
export class VotecreateController {
  constructor(private readonly votecreateService: VotecreateService) {}

  // ✅ Create new voting proposal
  @Post()
  create(@Body() createVotecreateDto: CreateVoteCreateDto) {
    return this.votecreateService.create(createVotecreateDto);
  }

  // ✅ Get all proposals
  @Get()
  findAll() {
    return this.votecreateService.findAll();
  }

  // ✅ Get a single proposal by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.votecreateService.findOne(id); // ✅ use id as string
  }

  // ✅ Update proposal by ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVotecreateDto: UpdateVotecreateDto) {
    return this.votecreateService.update(id, updateVotecreateDto); // ✅ use id as string
  }

  // ✅ Delete proposal by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.votecreateService.remove(id); // ✅ use id as string
  }
}
