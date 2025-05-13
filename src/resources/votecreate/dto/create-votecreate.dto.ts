import { IsString, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateVoteCreateDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  @IsNotEmpty()
  endDate: string; // Voting deadline

  @IsString()
  @IsOptional()
  eligibility?: string; // E.g. "Registered Citizens"
}
