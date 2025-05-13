import { PartialType } from '@nestjs/mapped-types';
import { CreateVotecreateDto } from './create-votecreate.dto';

export class UpdateVotecreateDto extends PartialType(CreateVotecreateDto) {}
