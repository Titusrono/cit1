import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VoteCreateDocument = VoteCreate & Document;

@Schema({ timestamps: true })
export class VoteCreate {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ default: 'Registered citizens' })
  eligibility: string;

  @Prop({ default: 0 })
  yesVotes: number;

  @Prop({ default: 0 })
  noVotes: number;
}

export const VoteCreateSchema = SchemaFactory.createForClass(VoteCreate);
