import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { User } from './entities/user.entity';
import { ErrorModule } from 'src/error/error.module';
import { Error } from 'src/error/entities/error.entity';
const user = 'guest';
const password = 'guest';
const host = 'ec2-35-92-99-178.us-west-2.compute.amazonaws.com:5672';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_RMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqp://guest:guest@ec2-35-92-99-178.us-west-2.compute.amazonaws.com:5672',
          ],
          queue: 'user',
          // noAck: true,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    TypeOrmModule.forFeature([User, Error]),
    ErrorModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
