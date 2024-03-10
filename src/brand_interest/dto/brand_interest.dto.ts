import { Field, ID, InputType } from '@nestjs/graphql';
import { SponsorshipTier } from 'src/events/events.enum';

@InputType()
export class BrandInterestInput {
  @Field(() => ID)
  eventId: string;

  @Field(() => SponsorshipTier)
  sponsorshipTier: SponsorshipTier;

  @Field()
  isInterested: boolean;
}
