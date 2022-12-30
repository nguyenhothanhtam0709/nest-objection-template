import { registerAPiModules } from '@apiModules/index';
import { Logger, Module } from '@nestjs/common';
import { registerSharedModules } from '@sharedModules';
import { registerConfigModule } from '@start/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    registerConfigModule(),
    ...registerSharedModules(),
    ...registerAPiModules(),
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
