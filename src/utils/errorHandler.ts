import { Response } from 'express';

export const handleError = (res: Response, error: any, statusCode: number = 500) => {
  const message = error.message || 'Server error';
  res.status(statusCode).json({ message });
};