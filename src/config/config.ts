import dotenv from 'dotenv';
import { IConfig } from '../interfaces/IConfig';

dotenv.config();

const config: IConfig = {
  sendGridApiKey: process.env.SENDGRID_API_KEY || '',
  mongoUri: process.env.MONGO_URI || '',
  jwtSecret: process.env.JWT_SECRET || '',
  adminEmail: process.env.ADMIN_EMAIL || 'admin@example.com',
  port: parseInt(process.env.PORT || '5000', 10),
};

export default config;