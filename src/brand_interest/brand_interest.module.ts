import { Module } from '@nestjs/common';
import { BrandInterestService } from './brand_interest.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandInterest } from './entities/brand_interst.entity';
import { EventsModule } from 'src/events/events.module';
import { BrandInterestResolver } from './brand_interest.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([BrandInterest]), EventsModule],
  providers: [BrandInterestService, BrandInterestResolver],
  exports: [BrandInterestService, BrandInterestResolver],
})
export class BrandInterestModule {}
