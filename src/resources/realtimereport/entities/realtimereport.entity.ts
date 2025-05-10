import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RealTimeReportDocument = RealTimeReport & Document;

@Schema({ timestamps: true })
export class RealTimeReport {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  category: string;

  @Prop()
  imageUrls: string; // comma-separated image file names

  @Prop({ default: 'open' })
  status: string;
}

export const RealTimeReportSchema = SchemaFactory.createForClass(RealTimeReport);
