import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import HttpException from '../handlers/HttpException';
import IUserModel from '../interfaces/user';
import { User } from '../models';

function verifyToken(req: Request, next: NextFunction) {
  try {
    const headers: string | undefined = req.headers.authorization;
    // check if headers exist
    if (!headers) return next(new HttpException(403, 'Unauthorized Access'));
    // check if starts with Bearer
    if (!headers.startsWith('Bearer'))
      return next(new HttpException(403, 'Unauthorized Access'));
    // split
    const token: string = headers.split(' ')[1];
    // check if exists
    if (!token) return next(new HttpException(403, 'Unauthorized Access'));
    // use with jwt
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
    // return decode payload
    return decoded;
  } catch (error) {
    return next(error);
  }
}

const userAuthorized = async function(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email } = verifyToken(req, next) as any;
    // get user using email
    const user: IUserModel | null = await User.findOne({ email });
    // if user not found
    if (!user) return next(new HttpException(403, 'Unauthorized Access'));
    // else store in req
    (req as any).user = user;
    return next();
  } catch (error) {
    return next(error);
  }
};

export default userAuthorized;
