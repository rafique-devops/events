import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import * as DeviceDetector from 'device-detector-js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request): string {
    const userAgent = request.headers['user-agent'];
    const deviceDetector = new DeviceDetector();
    const deviceInfo = deviceDetector.parse(userAgent);

    console.log('Device Information:', deviceInfo); // Log the details

    return this.appService.getHello();
  }
}
