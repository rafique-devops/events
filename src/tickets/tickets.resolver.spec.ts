import { Test, TestingModule } from '@nestjs/testing';
import { TicketsResolver } from './tickets.resolver';

describe('TicketsResolver', () => {
  let resolver: TicketsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketsResolver],
    }).compile();

    resolver = module.get<TicketsResolver>(TicketsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
