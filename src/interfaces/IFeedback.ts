import mongoose from 'mongoose';
import { Document } from 'mongoose';

export interface IFeedback extends Document {
    user: mongoose.Schema.Types.ObjectId;
    message: string;
  }