import { Request, Response, NextFunction } from 'express';
import { User } from '../models';
import HttpException from '../handlers/HttpException';

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.create(req.body);
    // return success with a jwt
    const token: string = (user as any).generateJWToken();
    return res.status(201).json({
      success: true,
      token
    });
  } catch (error) {
    return next(error);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  // check if user exists
  if (!user) return next(new HttpException(401, 'Invalid credentials'));
  // check password
  const isMatch: boolean = await (user as any).comparePassword(password);
  // if password match
  if (!isMatch) return next(new HttpException(401, 'Invalid credentials'));
  // log in user
  return res.status(200).json(user);
};
