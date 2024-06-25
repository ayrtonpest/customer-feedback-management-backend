import { Request, Response } from 'express';
import Feedback from '../models/feedback';
import sendNotificationEmail from '../services/emailService';
import { createdResponse, errorResponse, successResponse } from '../utils/responseHandler';

declare module 'express' {
  interface Request {
    user?: any;
  }
}

export const submitFeedback = async (req: Request, res: Response) => {
  try {
    const feedback = new Feedback({
      user: req.user._id,
      message: req.body.message,
    });
    const savedFeedback = await feedback.save();

    await sendNotificationEmail(savedFeedback);

    return createdResponse(res, savedFeedback);
  } catch (error) {
    return errorResponse(res, error);
  }
};

export const getAllFeedback = async (req: Request, res: Response) => {
  try {
    const feedbacks = await Feedback.find().populate('user', 'name email');
    return successResponse(res, feedbacks);
  } catch (error) {
    return errorResponse(res, error);
  }
};