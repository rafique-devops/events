import { Controller } from '@nestjs/common';
import { EventsService } from './events.service';
// import { CreateEventDto } from './dto/create-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  // @Post()
  // create(@Body() dto: CreateEventDto) {
  //   return this.eventService.create(dto);
  // }

  // @Get()
  // findAll() {
  //   return this.eventService.findAll();
  // }

  // @Get(':id')
  // async eventById(@Param('id') id: number) {
  //   return await this.eventService.eventById(id);
  // }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() dto: CreateEventDto) {
  //   return this.eventService.update(id, dto);
  // }
}
