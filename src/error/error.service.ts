import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Error } from './entities/error.entity';
import { Repository } from 'typeorm';
import { CreateErrorDto } from './dto/error.dto';

@Injectable()
export class ErrorService {
  constructor(
    @InjectRepository(Error)
    private errorRepo: Repository<Error>,
  ) {}
  create(createErrorDto: CreateErrorDto) {
    console.log('This action adds a new error');

    return this.errorRepo.save(createErrorDto);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
