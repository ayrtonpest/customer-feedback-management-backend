import mongoose, { Document, Schema } from 'mongoose';
import { IFeedback } from '../interfaces/IFeedback';

const feedbackSchema: Schema<IFeedback> = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Feedback = mongoose.model<IFeedback>('Feedback', feedbackSchema);

export default Feedback;