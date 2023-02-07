import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { ErrorService } from 'src/error/error.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly errorService: ErrorService,
  ) {}

  @EventPattern('user.created')
  async getProjectCreatedEvent(@Ctx() context) {
    const channel = context.getChannelRef();
    const msg = context.getMessage();
    const data = JSON.parse(msg.content.toString());

    const user = {
      region: data['region'],
      uid: data['uid'],
      deviceId: data['device_id'],
      joinDate: new Date(data['created']),
    };
    try {
      await this.userService.create(user);
    } catch (error) {
      // await this.userService.create(user);
      await this.errorService.create({
        errorMsg: msg.content.toString(),
      });
    } finally {
      channel.ack(msg);
    }
  }
  @EventPattern('user.deleted')
  async deletEvent(@Ctx() context) {
    const channel = context.getChannelRef();
    const msg = context.getMessage();
    const data = JSON.parse(msg.content.toString());

    const user = {
      region: data['region'],
      uid: data['uid'],
      deviceId: data['device_id'],
      joinDate: new Date(data['created']),
    };
    try {
      await this.userService.create(user);
    } catch (error) {
      // await this.userService.create(user);
      await this.errorService.create({
        errorMsg: msg.content.toString(),
      });
    } finally {
      channel.ack(msg);
    }
  }

  @EventPattern('user.updated')
  async updateEvent(@Ctx() context) {
    const channel = context.getChannelRef();
    const msg = context.getMessage();
    const data = JSON.parse(msg.content.toString());

    const user = {
      id: data['id'],
      nickname: data['nickname'],
    } ;
    try {
      await this.userService.update(user);
    } catch (error) {
      // await this.userService.create(user);
      await this.errorService.create({
        errorMsg: msg.content.toString(),
      });
    } finally {
      channel.ack(msg);
    }
  }
}
