import mongoose from 'mongoose';
import User from './User';
import Post from './Post';

const mongoConfig: object = {
  useFindAndModify: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(`${process.env.MONGO_URI}`, mongoConfig)
  .then(conn =>
    console.log(`MongoDB Connected: ${(conn.connection as any).host}`)
  )
  .catch(error => console.log(error));

export { User, Post };
