import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern } from '@nestjs/microservices';
import { Public } from './common/decorators/public.decorator';
@Controller()
export class AppController {
  @Public()
  @Get()
  healthCheck(): string {
    return `I'm Healthy~😀`;
  }
}
