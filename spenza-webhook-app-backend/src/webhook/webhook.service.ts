import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Webhook, WebhookDocument } from './schemas/webhook.schema';

@Injectable()
export class WebhookService {
  constructor(
    @InjectModel(Webhook.name)
    private readonly webhookModel: Model<WebhookDocument>,
  ) {}

  async create(url: string, event: string, userId: string) {
    const newWebhook = new this.webhookModel({
      url,
      event,
      user: userId,
    });
    return newWebhook.save();
  }

  async findByUser(userId: string): Promise<Webhook[]> {
    return this.webhookModel.find({ user: userId }).exec();
  }
}
