import express, { Request, Response, Application } from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';

// dotenv config
dotenv.config({ path: path.resolve(__dirname, '../config/config.env') });
// Initialize App
const app: Application = express();

// Routes
app.get(
  ' / ',
  (req: Request, res: Response): Response => {
    return res.send('Hello World');
  },
);

// Running app on PORT
const PORT: number = parseInt(`${process.env.PORT}`, 10) || 5001;

app.listen(PORT, () =>
  console.log(`App running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);
