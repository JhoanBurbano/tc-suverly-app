import swaggerJsDoc from 'swagger-jsdoc';
import { OAS3Options } from 'swagger-jsdoc';
import { CONFIG } from './environment.config';

const swaggerOptions: OAS3Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: CONFIG.CUSTOM.APP_NAME,
      version: String(CONFIG.API.VERSION),
      description:
        'API para obtener y transformar preguntas en un formato específico',
      contact: {
        name: CONFIG.AUTHOR.NAME,
        email: CONFIG.AUTHOR.EMAIL,
        url: CONFIG.AUTHOR.URL,
      },
    },
    servers: [
      {
        url: `http://${process.env.SWAGGER_HOST || 'localhost'}:${process.env.SWAGGER_PORT || '3000'}`,
        description: 'Servidor actual',
      },
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo',
      },
      {
        url: 'http://localhost:8080',
        description: 'Servidor de producción',
      },
    ],
  },
  apis: [
    process.env.NODE_ENV === 'production'
      ? './dist/controllers/*.js'
      : './src/controllers/*.ts',
  ],
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);
