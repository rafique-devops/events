import { Module } from '@nestjs/common';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { TicketsResolver } from './tickets.resolver';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService, TicketsResolver]
})
export class TicketsModule {}
