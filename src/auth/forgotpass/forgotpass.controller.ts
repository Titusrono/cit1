import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ForgotpassService } from './forgotpass.service';
import { CreateForgotpassDto } from './dto/create-forgotpass.dto';
import { UpdateForgotpassDto } from './dto/update-forgotpass.dto';

@Controller('forgotpass')
export class ForgotpassController {
  constructor(private readonly forgotpassService: ForgotpassService) {}

  @Post()
  create(@Body() createForgotpassDto: CreateForgotpassDto) {
    return this.forgotpassService.create(createForgotpassDto);
  }

  @Get()
  findAll() {
    return this.forgotpassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.forgotpassService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateForgotpassDto: UpdateForgotpassDto) {
    return this.forgotpassService.update(+id, updateForgotpassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forgotpassService.remove(+id);
  }
}
