import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces/IUser';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import config from '../config/config';

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
  if (token == null) return res.sendStatus(401);

  try {
    const decoded: any = jwt.verify(token, config.jwtSecret);
    const user: IUser | null = await User.findById(decoded._id).select('-password'); // Exclude password
    
    if (!user) {
      return res.sendStatus(401);
    }

    req.user = user;
    next();
  } catch (err) {
    res.sendStatus(403);
  }
};