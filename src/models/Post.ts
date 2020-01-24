import { Schema, model, Model } from 'mongoose';
import IPostModel from '../interfaces/post';

const postSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Title field is required'],
    minlength: [5, 'Minimum title length is 5chars']
  },
  content: {
    type: String,
    required: [true, 'Content field is required']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Post: Model<IPostModel> = model<IPostModel>('Post', postSchema, 'posts');

export default Post;
