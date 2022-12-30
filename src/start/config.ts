import Joi from 'joi';
import { DEFAULT_API_PORT } from '@constants/env';
import { EnvVarName } from '@enums/env';
import { ConfigModule } from '@nestjs/config';

const validationSchema = Joi.object({
  [EnvVarName.API_PORT]: Joi.number().default(DEFAULT_API_PORT),
});

export const registerConfigModule = () =>
  ConfigModule.forRoot({
    isGlobal: true,
    validationSchema,
  });
