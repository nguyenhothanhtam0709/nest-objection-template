import { Module } from '@nestjs/common';
import { registerConfigModule } from '@start/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [registerConfigModule()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
