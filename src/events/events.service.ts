import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Event } from './entities/event.entity';
import { Event } from './events.graphql';
// import { AddEventArgs } from './args/add.events.args';
import { ApolloError } from 'apollo-server-express';
import { UpdateEventArgs } from './args/update.events.args';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  // async create(dto: CreateEventDto): Promise<Event> {
  //   const events = new Event();
  //   Object.assign(events, dto);
  //   Logger.log(`Event Created: ${[events.eventName]}`);
  //   return await this.eventRepository.save(events);
  // }

  // findAll() {
  //   return this.eventRepository.find();
  // }

  // async eventById(id: number) {
  //   return await this.eventRepository.findOne({ where: { id } });
  // }

  // async update(id: number, dto: CreateEventDto): Promise<Event> {
  //   Logger.log(`Updating event with ID: ${id}`);
  //   const updated_events = await this.eventRepository.findOne({
  //     where: { id },
  //   });
  //   Object.assign(updated_events, dto);
  //   return await this.eventRepository.save(updated_events);
  // }

  // async create(dto: CreateEventDto): Promise<Event> {
  //   const events = new Event();
  //   Object.assign(events, dto);
  //   Logger.log(
  //     `${[events.eventName]} : Event Created at ${[events.createdAt]}`,
  //   );
  //   return await this.eventRepository.save(events);
  // }

  async create(event: Event): Promise<Event> {
    const createdEvent = await this.eventRepository.save(event);
    return createdEvent;
  }

  async update(id: string, updateEventArgs: UpdateEventArgs): Promise<Event> {
    try {
      Logger.log(`Updating Event with Id: ${id}`);
      Logger.log(updateEventArgs);
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
      const events = await this.eventRepository.find(); // isdeleted filter
      Logger.log(`Fetched All Event : ${events}`);
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
