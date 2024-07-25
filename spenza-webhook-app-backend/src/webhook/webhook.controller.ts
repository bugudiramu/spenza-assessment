import { Controller, Post, Get, Body, Req, UseGuards } from '@nestjs/common';
import { AuthenticatedRequest } from '../types/express-request.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post('subscribe')
  @UseGuards(JwtAuthGuard)
  async subscribe(
    @Body() createWebhookDto: CreateWebhookDto,
    @Req() req: AuthenticatedRequest,
  ) {
    const userId = req.user._id;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    return this.webhookService.create(
      createWebhookDto.url,
      createWebhookDto.event,
      userId,
    );
  }

  @Get('user-webhooks')
  @UseGuards(JwtAuthGuard)
  async getUserWebhooks(@Req() req: AuthenticatedRequest) {
    const userId = req.user._id;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    return this.webhookService.findByUser(userId);
  }
}
