import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServerDto } from './dto/server.dto';
import { Server } from './entities/server.entity';

@Injectable()
export class ServerService {
  constructor(
    @InjectRepository(Server)
    private serverRepo: Repository<Server>,
  ){}
  getServerList(game: string) {
    return this.serverRepo.find({
      where:{
        game
      }
    })
  }
}
