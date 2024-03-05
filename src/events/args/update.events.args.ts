import { Field, InputType } from '@nestjs/graphql';
// import { Ticket } from 'src/tickets/tickets.graphql';

@InputType()
export class UpdateEventArgs {
  @Field()
  eventName: string;

  @Field()
  attendeeType: string;

  @Field()
  eventType: string;

  @Field()
  storeName: string;

  @Field()
  eventLocation: string;

  @Field()
  sponsorshipTier: string;

  @Field()
  eventDescription: string;

  @Field()
  eventStartDate: string;

  @Field()
  eventStartTime: string;

  @Field()
  eventEndDate: string;

  @Field()
  eventEndTime: string;

  @Field()
  eventCategory: string;

  @Field()
  eventSampling: boolean;

  @Field()
  eventSamplingProduct: string;

  @Field()
  eventHeroImage: string;

  @Field()
  eventImageCarousal: string;

  @Field()
  eventTnC: string;

  @Field()
  publishToBrands: boolean;

  @Field()
  publishToCustomers: boolean;

  @Field()
  status: string;

  @Field()
  isDeleted: boolean;

  // @Field(() => [Ticket])
  // tickets: Ticket[];
}
