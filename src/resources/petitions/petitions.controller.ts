import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PetitionsService } from './petitions.service';
import { CreatePetitionDto } from './dto/create-petition.dto';
import { UpdatePetitionDto } from './dto/update-petition.dto';

@Controller('petitions')
export class PetitionsController {
  constructor(private readonly petitionsService: PetitionsService) {}

  // ✅ Handle file upload and form data together
  @Post()
  @UseInterceptors(FileInterceptor('supportingDocs'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createPetitionDto: CreatePetitionDto
  ) {
    return this.petitionsService.create(createPetitionDto, file);
  }

  @Get()
  findAll() {
    return this.petitionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petitionsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetitionDto: UpdatePetitionDto) {
    return this.petitionsService.update(id, updatePetitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petitionsService.remove(id);
  }
}
