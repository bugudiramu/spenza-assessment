import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { catchError, retry } from 'rxjs/operators';
import { Webhook } from './schemas/webhook.schema';

@Injectable()
export class WebhookHandlerService {
  constructor(
    @InjectModel('Webhook') private webhookModel: Model<Webhook>,
    private readonly httpService: HttpService,
  ) {}

  async handleEvent(event: any) {
    const webhooks = await this.webhookModel.find({ event: event.type });
    webhooks.forEach((webhook) => {
      this.httpService
        .post(webhook.url, event)
        .pipe(
          retry(3),
          catchError((error) => {
            console.error('Error sending webhook:', error);
            throw error;
          }),
        )
        .subscribe();
    });
  }
}
