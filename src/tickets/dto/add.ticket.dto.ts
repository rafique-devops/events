import { Field, ID, InputType, Int } from '@nestjs/graphql';
import {
  TicketStatus,
  TicketType,
  TicketConsumptionType,
  TicketDiscountType,
  TicketSlots,
  TicketVisibilityInApp,
  HiddenWhen,
} from '../tickets.enum';

@InputType()
export class AddTicketInput {
  @Field(() => ID)
  eventId: string;

  @Field()
  ticketName: string;

  @Field()
  ticketColor: string;

  @Field(() => TicketStatus)
  ticketStatus: TicketStatus;

  @Field(() => Int)
  ticketQuantity: number;

  @Field(() => TicketType)
  ticketType: TicketType;

  @Field(() => Int)
  ticketValue: number;

  @Field(() => TicketConsumptionType)
  ticketConsumptionType: TicketConsumptionType;

  @Field(() => TicketDiscountType)
  ticketDiscountType: TicketDiscountType;

  @Field(() => Int)
  ticketDiscountValue: number;

  @Field(() => Int)
  minimumBuyingLimit: number;

  @Field(() => Int)
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
  ticketSlotType: TicketSlots;

  @Field(() => Int)
  ticketSlotValue: number;

  @Field()
  ticketSampleProduct: string;

  @Field()
  ticketDescription: string;

  @Field(() => TicketVisibilityInApp)
  ticketVisibilityInApp: TicketVisibilityInApp;

  @Field(() => HiddenWhen)
  ticketHiddenWhen: HiddenWhen;

  @Field()
  isDeleted: boolean;
}
