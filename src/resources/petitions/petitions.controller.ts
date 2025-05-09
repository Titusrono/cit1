import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PetitionsService } from './petitions.service';
import { CreatePetitionDto } from './dto/create-petition.dto';
import { UpdatePetitionDto } from './dto/update-petition.dto';
import { FileInterceptor } from '@nestjs/platform-express'; // Import this for file handling

@Controller('petitions')
export class PetitionsController {
  constructor(private readonly petitionsService: PetitionsService) {}

  // POST endpoint to create a new petition with optional file upload
  @Post()
  @UseInterceptors(FileInterceptor('supportingDocs')) // 👈🏽 handles file field (supportingDocs)
  create(
    @Body() createPetitionDto: CreatePetitionDto, 
    @UploadedFile() file: any // 👈🏽 receives the uploaded file
  ) {
    return this.petitionsService.create(createPetitionDto, file); // Pass file to service
  }

  // GET all petitions
  @Get()
  findAll() {
    return this.petitionsService.findAll();
  }

  // GET a specific petition by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petitionsService.findOne(id);
  }

  // PATCH update a petition by ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetitionDto: UpdatePetitionDto) {
    return this.petitionsService.update(id, updatePetitionDto);
  }

  // DELETE a petition by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petitionsService.remove(id);
  }
}