import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Event } from './entities/event.entity';
import { EventsService } from './events.service';
import { ApolloError } from 'apollo-server-express';
import { v4 as uuidv4 } from 'uuid';
// import { Logger, Query } from '@nestjs/common';
import { AddEventInput } from './dto/add.events.dto';
import { UpdateEventInput } from './dto/update.events.dto';
// import { Logger } from '@nestjs/common';
// import { UpdateEventArgs } from './args/update.events.args';

@Resolver(() => Event)
export class EventsResolver {
  eventRepository: any;
  constructor(private readonly eventService: EventsService) {}

  @Mutation(() => Event, { name: 'createEvent' })
  async create(
    @Args('addEventInput') addEventInput: AddEventInput,
  ): Promise<Event> {
    try {
      const eventInput = await this.eventService.create({
        ...addEventInput,
        id: uuidv4(),
        createdAt: undefined,
        updatedAt: undefined,
        tickets: [],
      });
      if (!eventInput) {
        throw new Error('Error while fetching the input for event');
      }
      const event = await this.eventService.create(eventInput);
      if (!event) {
        throw new Error('Unable to create the event');
      }
      return event;
    } catch (error) {
      throw new ApolloError(
        'Unable to create event',
        'EVENT_CREATE_FAILED',
        error,
      );
    }
  }

  @Mutation(() => String, { name: 'deleteEventById' })
  delete(@Args({ name: 'eventId', type: () => String }) id: string) {
    try {
      return this.eventService.delete(id);
    } catch (error) {
      throw new ApolloError(
        'Error while deleting the event',
        'EVENT_DELETE_FAILED',
        error,
      );
    }
  }

  @Query(() => [Event], { name: 'getAllEvents' })
  async findAll(): Promise<Event[]> {
    try {
      const event = await this.eventService.findAll();
      if (!event) {
        throw new Error('No Events Found');
      }
      return event;
    } catch (error) {
      throw new ApolloError(
        'Error fetching events',
        'EVENT_FETCH_FAILED',
        error,
      );
    }
  }

  @Query(() => Event, { name: 'getEventById', nullable: true })
  async eventById(
    @Args({ name: 'eventId', type: () => String }) id: string,
  ): Promise<Event> {
    try {
      const event = await this.eventService.eventById(id);
      if (!event) {
        throw new Error('Event Not Found');
      } else {
        return event;
      }
    } catch (error) {
      throw new ApolloError(
        'Error fetching event',
        'EVENT_FETCH_FAILED',
        error,
      );
    }
  }

  @Mutation(() => Event, { name: 'updateEventById' })
  async update(
    @Args('id', { type: () => String }) id: string,
    @Args('updateEventInput') updateEventInput: UpdateEventInput,
  ): Promise<Event> {
    try {
      const updated_events = await this.eventService.update(
        id,
        updateEventInput,
      );
      // Logger.log(updated_events);
      if (!id || !updated_events) {
        throw new Error('Event not found or update failed');
      }
      return updated_events;
    } catch (error) {
      throw new ApolloError('Unable to update event', 'EVENT_UPDATE_FAILED', {
        originalErrorCode: error,
      });
    }
  }

  private generateEventId(): string {
    return uuidv4;
  }
}
