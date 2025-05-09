import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePetitionDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  targetAuthority?: string;
}
