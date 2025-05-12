import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { Report, ReportSchema } from './entities/report.entity'; // Import the schema

@Module({
  imports: [
    // Register the Report schema with MongooseModule
    MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }]),
  ],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
