import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'; // 👈 import this
import { PetitionsService } from './petitions.service';
import { CreatePetitionDto } from './dto/create-petition.dto';
import { UpdatePetitionDto } from './dto/update-petition.dto';

@Controller('petitions')
export class PetitionsController {
  constructor(private readonly petitionsService: PetitionsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('supportingDocs')) // 👈 this handles file upload
  create(
    @UploadedFile() file: Express.Multer.File, // 👈 this gets the uploaded file
    @Body() createPetitionDto: CreatePetitionDto // 👈 this gets the form fields
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
