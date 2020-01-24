import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import * as path from 'path';
import User from './User';
import Post from './Post';

// To be corrected later
dotenv.config({ path: path.resolve(__dirname, '../../config/config.env') });

const DEBUG: boolean = !!(process.env.NODE_ENV === 'development');
const MONGO_URI: string = `${process.env.MONGO_URI}`;

const mongoConfig: object = {
  useFindAndModify: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.set('debug', DEBUG);
mongoose
  .connect(MONGO_URI, mongoConfig)
  .then(conn =>
    console.log(`MongoDB Connected: ${(conn.connection as any).host}`)
  )
  .catch(error => console.log(error));

export { User, Post };
