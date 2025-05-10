import { Module } from '@nestjs/common';
import { ForgotpassService } from './forgotpass.service';
import { ForgotpassController } from './forgotpass.controller';

@Module({
  controllers: [ForgotpassController],
  providers: [ForgotpassService],
})
export class ForgotpassModule {}
