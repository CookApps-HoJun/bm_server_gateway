import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { databaseConfig } from './config/database.config';
import { UserModule } from './user/user.module';
import { ErrorModule } from './error/error.module';
import { ServerModule } from './server/server.module';
@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), UserModule, ErrorModule, ServerModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
