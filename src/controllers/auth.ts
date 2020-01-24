import { Request, Response, NextFunction } from 'express';
import { User } from '../models';
import HttpException from '../handlers/HttpException';
import IUserModel from '../interfaces/user';

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: IUserModel | null = await User.create(req.body);
    // return success with a jwt
    handleToken(user, 201, res);
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
  const user: IUserModel | null = await User.findOne({ email }).select(
    '+password'
  );
  // check if user exists
  if (!user) return next(new HttpException(401, 'Invalid credentials'));
  // check password
  const isMatch: boolean = await (user as any).comparePassword(password);
  // if password match
  if (!isMatch) return next(new HttpException(401, 'Invalid credentials'));
  // send success with token
  handleToken(user, 200, res);
};

function handleToken(model: any, statusCode: number, res: Response) {
  const token: string = model.generateJWToken();
  return res.status(statusCode).json({
    success: true,
    token
  });
}
