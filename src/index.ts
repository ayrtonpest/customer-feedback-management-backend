import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import swaggerDocs from './docs';
import connectDB from './utils/mongooseConnection';
import config from './config/config';
import { notFound, errorHandler } from './middleware';
import { createInitialAdmin } from './utils/createInitialAdmin';

dotenv.config();

const app = express();
const PORT = config.port;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/v1', routes);
app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  await connectDB(app, PORT); 
  await createInitialAdmin(); // Create initial admin user if one doesn't exist
};

startServer().catch((err) => {
  console.error('Failed to start the server:', err);
});