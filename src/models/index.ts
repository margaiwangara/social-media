import * as mongoose from 'mongoose';

const config: object = {
  useFindAndModify: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(`${process.env.MONGO_URI}`, config)
  .then(conn =>
    console.log(`MongoDB Connected: ${(conn.connection as any).host}`)
  )
  .catch(error => console.log(error));
