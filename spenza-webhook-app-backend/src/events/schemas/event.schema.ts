import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop({ required: true })
  user: string;

  @Prop({ required: true })
  eventType: string;

  @Prop({ required: true })
  payload: string;

  @Prop({ default: Date.now })
  timestamp: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
