import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { BrandInterest } from './entities/brand_interst.entity';
import { BrandInterestService } from './brand_interest.service';
import { EventsService } from 'src/events/events.service';
import { ApolloError } from 'apollo-server-express';
// import { Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { BrandInterestInput } from './dto/brand_interest.dto';

@Resolver(() => BrandInterest)
export class BrandInterestResolver {
  constructor(
    private readonly brandInterestService: BrandInterestService,
    private readonly eventService: EventsService,
  ) {}

  @Mutation(() => BrandInterest, { name: 'submitInterest' })
  async submitInterest(
    @Args('showInterest') brandInterestInput: BrandInterestInput,
  ): Promise<BrandInterest> {
    try {
      const event = await this.eventService.eventById(
        brandInterestInput.eventId,
      );
      // Logger.log(event);
      if (
        event.publishToBrands === true &&
        event.isDeleted === false &&
        event.status === 'Live' &&
        event.sponsorshipTier.includes(brandInterestInput.sponsorshipTier)
      ) {
        const submitBrandInterest =
          await this.brandInterestService.submitInterest({
            id: uuidv4(),
            createdAt: undefined,
            updatedAt: undefined,
            sponsorshipTier: brandInterestInput.sponsorshipTier,
            isInterested: brandInterestInput.isInterested,
            eventId: event,
          });
        if (!submitBrandInterest) {
          throw new ApolloError(
            'Error While Submitting Brand Interest',
            'INTEREST_SUBMIT_FAILEd',
          );
        }
        return submitBrandInterest;
      } else {
        throw new ApolloError('No Events Available', 'EVENT_NOT_AVAILABLE');
      }
    } catch (error) {
      throw new ApolloError(
        'Unable To Submit Interest',
        'INTEREST_SUBMIT_FAILED',
        { originalErrorCode: error },
      );
    }
  }

  private generateEventId(): string {
    return uuidv4;
  }
}
