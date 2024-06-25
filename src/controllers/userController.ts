import { Request, Response } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { createdResponse, errorResponse, notFoundResponse, successResponse } from '../utils/responseHandler';
import config from '../config/config';

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return errorResponse(res, 400);
    }

    const user = new User({ name, email, password });
    await user.save();

    return createdResponse(res, user);
  } catch (error) {
    return errorResponse(res, error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return notFoundResponse(res, 'Invalid credentials', 401);
    }

    const token = jwt.sign({ _id: user._id, email: user.email }, config.jwtSecret || '', { expiresIn: '1h' });

    return successResponse(res, { token }, 'Login successful');
  } catch (error) {
    return errorResponse(res, error);
  }
};


export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    console.log(`Attempting to delete user with ID: ${userId}`);
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return notFoundResponse(res, 'User not found', 404);
    }

    return successResponse(res, null, 'User deleted successfully');
  } catch (error) {
    return errorResponse(res, error);
  }
};