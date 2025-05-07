import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PetitionDocument = Petition & Document;

@Schema()
export class Petition {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: 0 })
  signatures: number;
}

export const PetitionSchema = SchemaFactory.createForClass(Petition);
