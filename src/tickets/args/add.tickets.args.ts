import { Field, InputType, Int } from '@nestjs/graphql';
import { TicketPrice } from '../ticket.price.graphql';
import {
  TicketSlots,
  TicketVisibilityInApp,
  HiddenWhen,
  TicketStatus,
} from '../tickets.graphql';

@InputType()
export class AddTicketArgs {
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
