import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IssueDocument = Issue & Document;

@Schema({ timestamps: true })
export class Issue {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true, enum: ['infrastructure', 'public-safety', 'environment', 'other'] })
  category: string;

  @Prop({ default: [] })
  images: string[];

  @Prop({ default: 'open', enum: ['open', 'in-progress', 'resolved'] })
  status: string;

  @Prop({ default: 0 })
  votes: number;
}

export const IssueSchema = SchemaFactory.createForClass(Issue);
