import { Module } from '@nestjs/common';
import { ResetpassService } from './resetpass.service';
import { ResetpassController } from './resetpass.controller';

@Module({
  controllers: [ResetpassController],
  providers: [ResetpassService],
})
export class ResetpassModule {}
