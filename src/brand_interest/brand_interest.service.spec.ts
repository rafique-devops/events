import { Test, TestingModule } from '@nestjs/testing';
import { BrandInterestService } from './brand_interest.service';

describe('BrandInterestService', () => {
  let service: BrandInterestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrandInterestService],
    }).compile();

    service = module.get<BrandInterestService>(BrandInterestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
