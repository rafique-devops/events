import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { Event } from './entities/event.entity';
import { Event as EventModel } from './events.graphql';
import { EventsService } from './events.service';
import { AddEventArgs } from './args/add.events.args';

@Resolver((of) => EventModel)
export class EventsResolver {
  constructor(private readonly eventService: EventsService) {}

  @Query((returns) => [EventModel], { name: 'getAllEvents' })
  async findAll(): Promise<EventModel[]> {
    return this.eventService.findAll();
  }

  @Mutation((returns) => String, { name: 'createEvent' })
  create(@Args('addEventArgs') addEventArgs: AddEventArgs): string {
    return this.eventService.create(addEventArgs);
  }
}
