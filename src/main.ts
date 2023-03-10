import { EnvVarName } from '@enums/env';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = app.get(Logger);

  app.setGlobalPrefix('api');

  const port = configService.get<number>(EnvVarName.API_PORT);
  await app.listen(port);
  logger.log(`Server is listening on port ${port}`);
}
bootstrap();
