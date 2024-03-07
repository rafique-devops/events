import { Field, InputType, Int } from '@nestjs/graphql';
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
export class UpdateTicketInput {
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
  ticketSlotType: TicketSlots;

  @Field()
  ticketSlotValue: string;

  @Field()
  ticketSampleProduct: string;

  @Field()
  ticketDescription: string;

  @Field(() => TicketVisibilityInApp)
  ticketVisibilityInApp: TicketVisibilityInApp;

  @Field(() => HiddenWhen)
  hiddenWhenConditions: HiddenWhen;

  @Field()
  isDeleted: boolean;
}
