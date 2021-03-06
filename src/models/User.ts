import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Schema, Model, model, HookNextFunction } from 'mongoose';
import IUserModel from '../interfaces/user';

const userSchema: Schema = new Schema({
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

// Presave Hash Password
userSchema.pre('save', async function(next: HookNextFunction) {
  try {
    const password: string = this.get('password');
    const salt: string = await bcrypt.genSalt(10);
    this.set('password', await bcrypt.hash(password, salt));
    next();
  } catch (error) {
    next(error);
  }
});

// Compare Password
userSchema.methods.comparePassword = async function(
  candidatePassword: string,
  next: HookNextFunction
) {
  try {
    const isMatch: boolean = await bcrypt.compare(
      candidatePassword,
      (this as any).password
    );
    return isMatch;
  } catch (error) {
    return next(error);
  }
};

userSchema.methods.generateJWToken = function(next: HookNextFunction) {
  try {
    const token: string = jwt.sign(
      { email: this.email },
      `${process.env.JWT_SECRET}`,
      { expiresIn: process.env.JWT_EXPIRE }
    );
    return token;
  } catch (error) {
    return next(error);
  }
};

const User: Model<IUserModel> = model<IUserModel>('User', userSchema, 'users');

export default User;
