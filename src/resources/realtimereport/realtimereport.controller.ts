import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RealtimereportService } from './realtimereport.service';
import { CreateRealtimereportDto } from './dto/create-realtimereport.dto';
import { UpdateRealtimereportDto } from './dto/update-realtimereport.dto';

@Controller('realtimereport')
export class RealtimereportController {
  constructor(private readonly realtimereportService: RealtimereportService) {}

  @Post()
  create(@Body() createRealtimereportDto: CreateRealtimereportDto) {
    return this.realtimereportService.create(createRealtimereportDto);
  }

  @Get()
  findAll() {
    return this.realtimereportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.realtimereportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRealtimereportDto: UpdateRealtimereportDto) {
    return this.realtimereportService.update(+id, updateRealtimereportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.realtimereportService.remove(+id);
  }
}
