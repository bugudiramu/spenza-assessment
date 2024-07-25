import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthenticatedRequest } from '../types/express-request.interface';
import { EventService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getEvents(@Req() req: AuthenticatedRequest) {
    const userId = req.user._id;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    return this.eventService.findAllByUser(userId);
  }

  // Emitting events
  @Post()
  async handleEvent(
    @Body() eventPayload: CreateEventDto,
    @Req() req: AuthenticatedRequest,
  ) {
    await this.eventService.create(eventPayload);
  }
}
