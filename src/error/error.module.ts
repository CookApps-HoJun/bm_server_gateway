import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ErrorService } from './error.service';
import { Error } from './entities/error.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Error])],
  providers: [ErrorService],
  exports: [ErrorService],
})
export class ErrorModule {}
