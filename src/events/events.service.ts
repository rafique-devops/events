import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(dto: CreateEventDto): Promise<Event> {
    const events = new Event();
    Object.assign(events, dto);
    Logger.log(`Event Created: ${[events.eventName]}`);
    return await this.eventRepository.save(events);
  }

  findAll() {
    return this.eventRepository.find();
  }

  async eventById(id: number) {
    return await this.eventRepository.findOne({ where: { id } });
  }

  async update(id: number, dto: CreateEventDto): Promise<Event> {
    Logger.log(`Updating event with ID: ${id}`);
    const updated_events = await this.eventRepository.findOne({
      where: { id },
    });
    Object.assign(updated_events, dto);
    return await this.eventRepository.save(updated_events);
  }
}
