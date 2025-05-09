import { PartialType } from '@nestjs/mapped-types';
import { CreateRealtimeReportDto } from './create-realtimereport.dto';
export class UpdateRealtimereportDto extends PartialType(CreateRealtimeReportDto) {}
