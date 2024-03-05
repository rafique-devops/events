import { Field, Float, ObjectType } from '@nestjs/graphql';

export enum PricingType {
  FREE,
  PAID,
}

export enum LoyaltyDiscountType {
  PERCENTAGE,
  FLAT_POINTS,
}

export enum PaymentOption {
  LOYALTY_POINTS_ONLY,
  NO_LOYALTY_POINTS,
  CASH_AND_LOYALTY_POINTS,
}

@ObjectType()
export class TicketPrice {
  @Field()
  pricingType: PricingType;

  @Field(() => Float, { nullable: true })
  ticketValue: number;

  @Field(() => PaymentOption, { nullable: true })
  paymentOption: PaymentOption;

  @Field(() => LoyaltyDiscountType, { nullable: true })
  loyaltyDiscountType: LoyaltyDiscountType;

  @Field(() => Float, { nullable: true })
  loyaltyDiscountValue: number;
}
