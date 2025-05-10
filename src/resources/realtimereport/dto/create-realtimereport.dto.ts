import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRealTimeReportDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  imageUrls?: string;
}
