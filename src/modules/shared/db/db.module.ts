import { knexSnakeCaseMappers } from 'objection';
import { EnvVarName } from '@enums/env';
import { BaseModel } from '@models/base.model';
import { MODEL_LIST } from '@models/index';
import { Global, Logger, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ObjectionModule,
  ObjectionModuleOptions,
} from '@willsoto/nestjs-objection';

@Global()
@Module({
  imports: [
    ObjectionModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const config: ObjectionModuleOptions = {
          Model: BaseModel,
          config: {
            client: 'pg',
            useNullAsDefault: true,
            ...knexSnakeCaseMappers(),
            connection: {
              host: configService.get<string>(EnvVarName.DB_HOST),
              port: configService.get<number>(EnvVarName.DB_PORT),
              user: configService.get<string>(EnvVarName.DB_USERNAME),
              password: configService.get<string>(EnvVarName.DB_PASSWORD),
              database: configService.get<string>(EnvVarName.DB_NAME),
              pool: {
                min: 2,
                max: 10,
              },
            },
          },
        };
        return config;
      },
    }),
    ObjectionModule.forFeature(MODEL_LIST),
  ],
  exports: [ObjectionModule],
})
export class DbModule {}
