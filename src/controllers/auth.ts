import { Request, Response, NextFunction } from 'express';
import { User } from '../models';

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.create(req.body);
  } catch (error) {
    next(error);
  }
};
