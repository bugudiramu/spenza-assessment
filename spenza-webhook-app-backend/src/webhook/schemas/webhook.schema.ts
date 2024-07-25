import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WebhookDocument = Webhook & Document;

@Schema()
export class Webhook {
  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  event: string;

  @Prop({ required: true })
  user: string;

  @Prop({ default: Date.now })
  timestamp: Date;
}

export const WebhookSchema = SchemaFactory.createForClass(Webhook);
