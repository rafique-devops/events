import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { UpdateEventInput } from './dto/update.events.dto';
import { ApolloError } from 'apollo-server-express';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(event: Event): Promise<Event> {
    const createdEvent = await this.eventRepository.save(event);
    return createdEvent;
  }

  async update(id: string, updateEventInput: UpdateEventInput): Promise<Event> {
    try {
      Logger.log(`Updating Event with Id: ${id}`);
      Logger.log(updateEventInput);
      const updated_events = await this.eventRepository.findOne({
        where: { id },
      });
      if (!updated_events) {
        throw new Error('Event Not Found');
      }
      // Object.assign(updated_events, addEventArgs);
      return await this.eventRepository.save(updated_events);
    } catch (error) {
      throw new ApolloError(
        'Error while updating events',
        'EVENT_UPDATED_FAILED',
        error,
      );
    }
  }

  delete(id: string): string {
    this.eventRepository.delete(id);
    Logger.log(`Deleted Event with Id: ${id}`);
    return `Event with Id: ${id} deleted successfully`;
  }

  async findAll(): Promise<Event[]> {
    try {
      const events = await this.eventRepository.find({
        where: { isDeleted: false },
      }); // isdeleted filter
      Logger.log(events);
      if (!events) {
        throw new Error('No Event Found');
      }
      return events;
    } catch (error) {
      throw new ApolloError(
        'Error fetching events',
        'EVENT_FETCH_FAILED',
        error,
      );
    }
  }

  async eventById(id: string): Promise<Event> {
    const event = await this.eventRepository.findOne({ where: { id } });
    Logger.log(`Fetched Event By Id: ${id}`);
    return event;
  }
}
