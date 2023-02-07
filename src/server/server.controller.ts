import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ServerService } from './server.service';
import { CreateServerDto } from './dto/server.dto';

@Controller('server')
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @Get(":game")
  findAll(@Param('game') game: string) {
    return this.serverService.getServerList(game);
  }
}
