import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TicketPrice } from './ticket.price.graphql';
// import { TicketStatus } from './ticket.status.graphql';

export enum TicketStatus {
  OPEN,
  CLOSED,
  MARK_AS_SOLD_OUT,
}

export enum TicketSlots {
  DURATION,
  COUNT,
}

export enum TicketVisibilityInApp {
  ALWAYS_VISIBLE,
  ALWAYS_HIDDEN,
  HIDDEN_WHEN,
}

export enum HiddenWhen {
  SOLD_OUT,
  STATUS_CLOSED,
  SALES_NOT_STARTED,
  SALES_ENDED,
}

@ObjectType()
export class Ticket {
  @Field(() => Int)
  id: number;

  @Field()
  ticketName: string;

  @Field()
  ticketColor: string;

  @Field(() => TicketStatus)
  ticketStatus: TicketStatus;

  @Field(() => Int)
  ticketQuantity: number;

  @Field(() => TicketPrice)
  ticketPricing: TicketPrice;

  @Field()
  minimumBuyingLimit: number;

  @Field()
  maximumBuyingLimit: number;

  @Field()
  salesStartDate: string;

  @Field()
  salesStartTime: string;

  @Field()
  salesEndDate: string;

  @Field()
  salesEndTime: string;

  @Field(() => TicketSlots)
  ticketSlots: TicketSlots;

  @Field()
  ticketSamplingProduct: string;

  @Field()
  ticketDescription: string;

  @Field(() => TicketVisibilityInApp)
  ticketVisibilityInApp: TicketVisibilityInApp;

  @Field(() => HiddenWhen)
  hiddenWhenConditions: HiddenWhen;

  @Field()
  isDeleted: boolean;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field(() => Event)
  event: Event;
}
