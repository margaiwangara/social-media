import { Response, Request, NextFunction } from 'express';
import HttpException from '../handlers/HttpException';

function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) {
  return response.status(error.status || 500).json({
    error: {
      message: error.message || 'Oops! Something went wrong'
    }
  });
}

export default errorMiddleware;
