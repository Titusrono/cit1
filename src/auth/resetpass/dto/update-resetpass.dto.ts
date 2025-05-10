import { PartialType } from '@nestjs/mapped-types';
import { CreateResetpassDto } from './create-resetpass.dto';

export class UpdateResetpassDto extends PartialType(CreateResetpassDto) {}
