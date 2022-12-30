import Joi from 'joi';
import { DEFAULT_API_PORT } from '@constants/env';
import { EnvVarName } from '@enums/env';
import { ConfigModule } from '@nestjs/config';

const validationSchema = Joi.object({
  [EnvVarName.API_PORT]: Joi.number().default(DEFAULT_API_PORT),

  // database
  [EnvVarName.DB_HOST]: Joi.string().required(),
  [EnvVarName.DB_PORT]: Joi.number().required(),
  [EnvVarName.DB_USERNAME]: Joi.string().required(),
  [EnvVarName.DB_PASSWORD]: Joi.string().required(),
  [EnvVarName.DB_NAME]: Joi.string().required(),
});

export const registerConfigModule = () =>
  ConfigModule.forRoot({
    isGlobal: true,
    validationSchema,
  });
