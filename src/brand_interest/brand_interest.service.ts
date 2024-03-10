import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandInterest } from './entities/brand_interst.entity';
import { Repository } from 'typeorm';
import { EventsService } from 'src/events/events.service';
import { ApolloError } from 'apollo-server-express';

@Injectable()
export class BrandInterestService {
  constructor(
    @InjectRepository(BrandInterest)
    private brandInterestRepository: Repository<BrandInterest>,
    private eventService: EventsService,
  ) {}

  async submitInterest(interest: BrandInterest): Promise<BrandInterest> {
    try {
      const submitInterest = await this.brandInterestRepository.save(interest);
      if (!submitInterest) {
        throw new Error('Failed To Submit Interest');
      }
      return submitInterest;
    } catch (error) {
      throw new ApolloError(
        'Error While Submitting Interest',
        'INTEREST_SUBMIT_FAILED',
        error,
      );
    }
  }
}
