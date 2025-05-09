import { Module } from '@nestjs/common';
import { RealtimereportService } from './realtimereport.service';
import { RealtimereportController } from './realtimereport.controller';

@Module({
  controllers: [RealtimereportController],
  providers: [RealtimereportService],
})
export class RealtimereportModule {}
