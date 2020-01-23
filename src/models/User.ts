import { Schema, Model, model, Document } from 'mongoose';

export interface IUserModel extends Document {
  name: string;
  surname?: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required'],
    maxlength: [50, 'Maximum name length is 50 chars']
  },
  surname: {
    type: String,
    maxlength: [50, 'Maximum surname length is 50 chars']
  },
  email: {
    type: String,
    required: [true, 'Email field is required'],
    match: [
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
      'Please enter a valid email'
    ],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password field is required'],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password must contain at least one lowercase and uppercase letter and one number'
    ],
    select: false
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const User: Model<IUserModel> = model<IUserModel>('User', userSchema, 'users');

export default User;
