import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsResolver } from './tickets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { EventsModule } from 'src/events/events.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket]), EventsModule],
  controllers: [],
  providers: [TicketsService, TicketsResolver],
  exports: [TicketsService, TicketsResolver],
})
export class TicketsModule {}
