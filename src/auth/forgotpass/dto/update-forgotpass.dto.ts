import { PartialType } from '@nestjs/mapped-types';
import { CreateForgotpassDto } from './create-forgotpass.dto';

export class UpdateForgotpassDto extends PartialType(CreateForgotpassDto) {}
