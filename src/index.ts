import express, { Application, Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';
import errorMiddleware from './middleware/errors';
import authRoutes from './routes/auth';

// dotenv config
dotenv.config({ path: path.resolve(__dirname, '../config/config.env') });
// Initialize App
const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error Handling
app.use(function(req: Request, res: Response, next: NextFunction) {
  console.log(req.headers.authorization);
  const error = new Error('Not Found');
  (error as any).status = 404;
  next(error);
});
app.use(errorMiddleware);

// Running app on PORT
const PORT: number = parseInt(`${process.env.PORT}`, 10) || 5001;

app.listen(PORT, () =>
  console.log(`App running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
