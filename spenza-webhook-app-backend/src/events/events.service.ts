import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './schemas/event.schema';

@Injectable()
export class EventService {
  constructor(@InjectModel('Event') private eventModel: Model<Event>) {}

  async create(eventPayload: CreateEventDto): Promise<Event> {
    const { user, eventType, payload } = eventPayload;
    const newEvent = new this.eventModel({
      eventType: eventType || 'Unknown',
      payload,
      timestamp: new Date(),
      user,
    });
    return newEvent.save();
  }

  async findAllByUser(userId: string): Promise<Event[]> {
    return this.eventModel.find({ user: userId }).exec();
  }
}
