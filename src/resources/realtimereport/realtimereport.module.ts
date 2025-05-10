import { Module } from '@nestjs/common';
import { RealTimeReportService } from './realtimereport.service';
import { RealTimeReportController } from './realtimereport.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RealTimeReport, RealTimeReportSchema } from './entities/realtimereport.entity';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: RealTimeReport.name, schema: RealTimeReportSchema }])
  ],
  controllers: [RealTimeReportController],
  providers: [RealTimeReportService],
})
export class RealTimeReportModule {}
