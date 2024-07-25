import { Controller, Post, Body, Get } from '@nestjs/common';
import { WebhookHandlerService } from './webhook-handler.service';

@Controller('webhook-events')
export class WebhookEventController {
  constructor(private readonly webhookHandlerService: WebhookHandlerService) {}

  @Post()
  async handleEvent(@Body() event: any) {
    return this.webhookHandlerService.handleEvent(event);
  }
}
