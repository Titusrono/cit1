import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResetpassService } from './resetpass.service';
import { CreateResetpassDto } from './dto/create-resetpass.dto';
import { UpdateResetpassDto } from './dto/update-resetpass.dto';

@Controller('resetpass')
export class ResetpassController {
  constructor(private readonly resetpassService: ResetpassService) {}

  @Post()
  create(@Body() createResetpassDto: CreateResetpassDto) {
    return this.resetpassService.create(createResetpassDto);
  }

  @Get()
  findAll() {
    return this.resetpassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resetpassService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResetpassDto: UpdateResetpassDto) {
    return this.resetpassService.update(+id, updateResetpassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resetpassService.remove(+id);
  }
}
