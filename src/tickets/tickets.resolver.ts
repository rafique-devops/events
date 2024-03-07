import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TicketsService } from './tickets.service';
import { Ticket } from './entities/ticket.entity';
import { EventsService } from 'src/events/events.service';
import { ApolloError } from 'apollo-server-express';
import { AddTicketInput } from './dto/add.ticket.dto';
import { v4 as uuidv4 } from 'uuid';
import { Logger } from '@nestjs/common';

@Resolver(() => Ticket)
export class TicketsResolver {
  constructor(
    private readonly ticketService: TicketsService,
    private readonly eventService: EventsService,
  ) {}

  @Query(() => [Ticket], { name: 'getAllTickets' })
  async findAll(): Promise<Ticket[]> {
    try {
      const ticket = await this.ticketService.findAll();
      if (!ticket) {
        throw new Error('No Ticket Found');
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

  @Mutation(() => Ticket, { name: 'createTicket' })
  async create(
    @Args('addTicketInput') addTicketInput: AddTicketInput,
  ): Promise<Ticket> {
    try {
      const event = await this.eventService.eventById(addTicketInput.eventId);
      Logger.log(event);
      if (!event) {
        throw new Error('No Event Found');
      }
      const ticket = await this.ticketService.createTickets({
        ...addTicketInput,
        eventId: event,
        id: uuidv4(),
        saleStartDate: '',
        saleStartTime: '',
        saleEndDate: '',
        saleEndTime: '',
        createdAt: undefined,
        updatedAt: undefined,
      });
      Logger.log(ticket);
      if (!ticket) {
        throw new Error('Error While Creating Tickets');
      }
      return ticket;
    } catch (error) {
      throw new ApolloError(
        'Unable To Create Ticket',
        'TICKET_CREATE_FAILEd',
        error,
      );
    }
  }

  @Query(() => [Ticket], { name: 'getTicketByEventId', nullable: true })
  async getTicketsByEventId(
    @Args({ name: 'eventId', type: () => String }) eventId: string,
  ): Promise<Ticket[]> {
    try {
      const ticketByEvent =
        await this.ticketService.getTicketsByEventId(eventId);
      if (!ticketByEvent) {
        throw new Error(`No Tickets Found On Event Id: ${eventId}`);
      }
      return ticketByEvent;
    } catch (error) {
      throw new ApolloError(
        'Error While Fetching Tickets By Event ID',
        'TICKET_FETCH_FAILED',
        error,
      );
    }
  }

  private generateEventId(): string {
    return uuidv4;
  }
}
