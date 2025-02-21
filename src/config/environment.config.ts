import dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
  API: {
    URL: process.env.API_URL as string,
    AUTH_TOKEN: process.env.API_AUTH_TOKEN as string,
    VERSION: process.env.API_VERSION || 1,
  },
  AUTHOR: {
    NAME: process.env.AUTHOR_NAME,
    EMAIL: process.env.AUTHOR_EMAIL,
    URL: process.env.AUTHOR_URL,
  },
  PORT: process.env.PORT || 3000,
  CUSTOM: {
    TITLE_RESPONSE: process.env.CUSTOM_TITLE_RESPONSE || 'API Response',
    USE_MOCK: Boolean(process.env.CUSTOM_USE_MOCKS?.toLowerCase() === 'true'),
    APP_NAME: process.env.CUSTOM_APP_NAME || 'API',
  },
  NODE_ENV: process.env.NODE_ENV || 'development',
  SWAGGER: {
    HOST: process.env.SWAGGER_HOST || 'localhost',
    PORT: process.env.SWAGGER_PORT || 8080,
    COMPLETE_URL: process.env.SWAGGER_COMPLETE_URL,
  },
};

export type EnvironmentConfig = typeof CONFIG;
