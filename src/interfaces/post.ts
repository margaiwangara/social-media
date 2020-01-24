import { Document } from 'mongoose';

interface IPostModel extends Document {
  title: string;
  content: string;
  dateCreated: Date;
  user: string;
}

export default IPostModel;
