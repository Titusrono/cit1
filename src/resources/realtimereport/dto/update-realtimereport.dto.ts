import { PartialType } from '@nestjs/mapped-types';
import { CreateRealTimeReportDto } from './create-realtimereport.dto';

export class UpdateRealTimeReportDto extends PartialType(CreateRealTimeReportDto) {}
