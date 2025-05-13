import { PartialType } from '@nestjs/mapped-types';
import { CreateVoteCreateDto } from './create-votecreate.dto';

export class UpdateVotecreateDto extends PartialType(CreateVoteCreateDto) {}
