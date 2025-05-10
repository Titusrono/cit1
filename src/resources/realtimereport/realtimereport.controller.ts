import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles, UseInterceptors, Query } from '@nestjs/common';
import { RealTimeReportService } from './realtimereport.service';
import { CreateRealTimeReportDto } from './dto/create-realtimereport.dto';
import { UpdateRealTimeReportDto } from './dto/update-realtimereport.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('realtimereport')
export class RealTimeReportController {
  constructor(private readonly realTimeReportService: RealTimeReportService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images', 5, {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + extname(file.originalname));
      },
    }),
  }))
  async create(@Body() createDto: CreateRealTimeReportDto, @UploadedFiles() files: Express.Multer.File[]) {
    const imagePaths = files.map(file => file.filename).join(',');
    return this.realTimeReportService.create({ ...createDto, imageUrls: imagePaths });
  }

  @Get()
  findAll(@Query('status') status?: string) {
    if (status) {
      return this.realTimeReportService.findByStatus(status);
    }
    return this.realTimeReportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.realTimeReportService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateRealTimeReportDto) {
    return this.realTimeReportService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.realTimeReportService.remove(id);
  }
}
