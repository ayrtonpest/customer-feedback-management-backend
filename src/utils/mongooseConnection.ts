import mongoose from 'mongoose';
import config from '../config/config';
import { Express } from 'express';

const connectDB = async (app: Express, port: number | string) => {
  try {
    await mongoose.connect(config.mongoUri, {});
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1); 
  }
};

export default connectDB;