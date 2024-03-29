import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Equal, Repository } from 'typeorm';
import { EventsService } from 'src/events/events.service';
import { ApolloError } from 'apollo-server-express';
// import { error } from 'console';
// import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
    private eventService: EventsService,
  ) {}

  async createTickets(ticket: Ticket): Promise<Ticket> {
    try {
      const create = await this.ticketRepository.save(ticket);
      if (!create) {
        throw new Error('Failed to Create Ticket');
      }
      return create;
    } catch (error) {
      throw new ApolloError(
        'Error While Creating Tickets',
        'TICKET_CREATE_FAILED',
        error,
      );
    }
  }

  async getAllTickets(): Promise<Ticket[]> {
    try {
      const ticket = await this.ticketRepository.find({
        where: { isDeleted: false },
      });
      Logger.log(ticket);
      if (!ticket) {
        throw new Error('No Tickets Founds');
      }
      return ticket;
    } catch (error) {
      throw new ApolloError(
        'Error While Fetching Tickets',
        'TICKET_FETCH_FAILED',
        error,
      );
    }
  }

  async getTicketsByEventId(event_id: string): Promise<Ticket[]> {
    try {
      const ticketByEvent = await this.ticketRepository.find({
        where: { eventId: Equal(event_id) },
      });
      return ticketByEvent;
    } catch (error) {
      throw new ApolloError(
        'Error While Fetching Tickets By Event Id',
        'TICKET_FETCH_FAILD',
        error,
      );
    }
  }
}
