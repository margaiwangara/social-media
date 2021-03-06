import express, { Application, Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';
import cors from 'cors';
import errorMiddleware from './middleware/errors';
import authRoutes from './routes/auth';
import postRoutes from './routes/posts';

// dotenv config
dotenv.config({ path: path.resolve(__dirname, '../config/config.env') });
// Initialize App
const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Error Handling
app.use(function(req: Request, res: Response, next: NextFunction) {
  console.log(req.headers.authorization);
  const error = new Error();
  (error as any).status = 404;
  error.message = 'Not Found';
  next(error);
});
app.use(errorMiddleware);

// Running app on PORT
const PORT: number = parseInt(`${process.env.PORT}`, 10) || 5001;

app.listen(PORT, () =>
  console.log(`App running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
