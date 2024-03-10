import { Field, InputType } from '@nestjs/graphql';
import {
  AttendeeType,
  EventType,
  SponsorshipTier,
  Status,
} from '../events.enum';

@InputType()
export class UpdateEventInput {
  @Field()
  eventName: string;

  @Field(() => AttendeeType)
  attendeeType: AttendeeType;

  @Field(() => EventType)
  eventType: EventType;

  @Field()
  storeName: string;

  @Field()
  eventLocation: string;

  @Field(() => [SponsorshipTier])
  sponsorshipTier: SponsorshipTier[];

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

  @Field(() => Status)
  status: Status;

  @Field()
  isDeleted: boolean;
}
