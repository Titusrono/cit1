import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePetitionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsString()
  targetAuthority?: string;
}
