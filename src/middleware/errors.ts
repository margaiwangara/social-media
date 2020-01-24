import { Response, Request, NextFunction } from 'express';
import HttpException from '../handlers/HttpException';

function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  let err: HttpException = { ...error };
  let message: string;
  switch (err.name) {
    case 'CastError':
      message = 'Resource Not Found';
      err = new HttpException(404, message);
      break;
    case 'ValidationError':
      message = JSON.stringify(
        Object.values((err as any).errors).map((value: any) => value.message)
      );
      err = new HttpException(400, message);
      break;
    default:
      message = 'Oops! Something went wrong';
      err = new HttpException(500, message);
      break;
  }
  // Duplicate input error
  if (err.status === 11000) {
    message = 'Duplicate Field Value Entered';
    err = new HttpException(400, message);
  }
  console.log(process.env.NODE_ENV === 'development' && error);
  return response.status(err.status).json({
    error: {
      message: err.message
    }
  });
}

export default errorMiddleware;
