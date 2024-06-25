import { Response } from 'express';

export const successResponse = (res: Response, data: any, message: string = 'Success', statusCode: number = 200) => {
  res.status(statusCode).json({ message, data });
};

export const createdResponse = (res: Response, data: any, message: string = 'Resource created', statusCode: number = 201) => {
  res.status(statusCode).json({ message, data });
};

export const notFoundResponse = (res: Response, message: string = 'Resource not found', statusCode: number = 404) => {
  res.status(statusCode).json({ message });
};

export const errorResponse = (res: Response, error: any, statusCode: number = 500) => {
  const message = error.message || 'Server error';
  res.status(statusCode).json({ message });
};
