import { Request, Response, NextFunction } from 'express';
import { handleError } from '../utils/errorHandler';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return handleError(res, 'Forbidden. Administrators only', 403)
  }
};