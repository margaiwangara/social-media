import { Document } from 'mongoose';

interface IUserModel extends Document {
  name: string;
  surname?: string;
  email: string;
  password: string;
  dateCreated: Date;
}

export default IUserModel;
