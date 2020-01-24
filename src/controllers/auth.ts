import { Request, Response, NextFunction } from 'express';
import { User } from '../models';
import asyncWrapper from '../handlers/asyncWrapper';
import HttpException from '../handlers/HttpException';

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const loginUser = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // check if user exists
    if (!user) return new HttpException(404, 'User does not exist');
    // check password
  }
);
