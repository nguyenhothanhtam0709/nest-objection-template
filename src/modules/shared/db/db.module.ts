import { EnvVarName } from '@enums/env';
import { MODEL_LIST } from '@models/index';
import { Global, Module } from '@nestjs/common';
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
          config: {
            client: 'pg',
            useNullAsDefault: true,
            connection: {
              host: configService.get<string>(EnvVarName.DB_HOST),
              port: configService.get<number>(EnvVarName.DB_PORT),
              userName: configService.get<string>(EnvVarName.DB_USERNAME),
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
