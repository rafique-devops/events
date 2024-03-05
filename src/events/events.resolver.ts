import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { Event } from './entities/event.entity';
import { Event as EventModel } from './events.graphql';
import { EventsService } from './events.service';
import { AddEventArgs } from './args/add.events.args';
import { ApolloError } from 'apollo-server-express';
import { v4 as uuidv4 } from 'uuid';
// import { Logger } from '@nestjs/common';
import { UpdateEventArgs } from './args/update.events.args';

@Resolver((of) => EventModel)
export class EventsResolver {
  constructor(private readonly eventService: EventsService) {}

  @Mutation((returns) => EventModel, { name: 'createEvent' })
  async create(
    @Args('addEventArgs') addEventArgs: AddEventArgs,
  ): Promise<EventModel> {
    const event = await this.eventService.create({
      id: uuidv4(),
      ...addEventArgs,
      createdAt: undefined,
      updatedAt: undefined,
    });
    try {
      if (!event) {
        throw new Error('Error while creating the event');
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

  @Mutation((returns) => String, { name: 'deleteEventById' })
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

  @Query((returns) => [EventModel], { name: 'getAllEvents' })
  async findAll(): Promise<EventModel[]> {
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

  @Query((returns) => EventModel, { name: 'getEventById', nullable: true })
  async eventById(
    @Args({ name: 'eventId', type: () => String }) id: string,
  ): Promise<EventModel> {
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

  @Mutation((returns) => EventModel, { name: 'updateEventById' })
  async update(
    @Args('id', { type: () => String }) id: string,
    @Args('updateEventArgs') updateEventArgs: UpdateEventArgs,
  ): Promise<EventModel> {
    try {
      const updated_events = await this.eventService.update(
        id,
        updateEventArgs,
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
