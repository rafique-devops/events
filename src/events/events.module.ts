import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { EventsResolver } from './events.resolver';
// import { Ticket } from 'src/tickets/tickets.graphql';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [],
  providers: [EventsService, EventsResolver],
  exports: [EventsService],
})
export class EventsModule {}
