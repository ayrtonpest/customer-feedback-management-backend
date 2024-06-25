import { feedbackSwagger } from './feedback';
import { userSwagger } from './user';
import { adminSwagger } from './admin';

const swaggerDocs = {
  openapi: '3.0.0',
  info: {
    title: 'Customer Feedback API',
    version: '1.0.0',
    description: 'API for managing customer feedback',
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  paths: {
    ...feedbackSwagger,
    ...userSwagger,
    ...adminSwagger,
  },
};

export default swaggerDocs;
