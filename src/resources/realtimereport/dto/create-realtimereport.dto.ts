import { IsString, IsNotEmpty, IsOptional, IsArray, IsEnum } from 'class-validator';

export class CreateRealtimeReportDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['infrastructure', 'public-safety', 'environment', 'other'])
  category: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}
