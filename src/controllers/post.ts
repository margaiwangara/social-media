import { Request, Response, NextFunction } from 'express';
import { Post } from '../models';
import HttpException from '../handlers/HttpException';
import IPostModel from '../interfaces/post';

export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({
      success: true,
      data: posts
    });
  } catch (error) {
    return next(error);
  }
};

export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post: IPostModel | null = await Post.findById(req.params.id);
    if (!post) return next(new HttpException(404, 'Post Not Found'));
    return res.status(200).json(post);
  } catch (error) {
    return next(error);
  }
};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, content }: IPostModel = req.body;
    // get user id from req
    const id: string = (req as any).user._id;
    // else create post
    const newPost: IPostModel = await Post.create({ title, content, user: id });
    // return new post
    return res.status(201).json(newPost);
  } catch (error) {
    return next(error);
  }
};

export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get user and post id
    const userId: string = (req as any).user._id;
    const postId: string = req.params.id;
    const message = 'You are not authorized to update this post';
    // run ownership function
    const isOwned: boolean | void = await confirmPostOwner(
      next,
      postId,
      userId,
      message
    );
    if (!isOwned) return;
    // else update
    const updatedPost: IPostModel | null = await Post.findByIdAndUpdate(
      postId,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    return res.status(200).json(updatedPost);
  } catch (error) {
    return next(error);
  }
};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get user and post id
    const userId: string = (req as any).user._id;
    const postId: string = req.params.id;
    const message = 'You are not authorized to delete this post';
    // post ownership
    const isOwned: boolean | void = await confirmPostOwner(
      next,
      postId,
      userId,
      message
    );
    if (!isOwned) return;
    await Post.findByIdAndDelete(postId);
    return res.status(200).json({ success: true, data: {} });
  } catch (error) {
    return next(error);
  }
};

async function confirmPostOwner(
  next: NextFunction,
  postId: string,
  userId: string,
  message: string
) {
  try {
    // check if user owns post
    const post: IPostModel | null = await Post.findById(postId);
    if (!post) return next(new HttpException(404, 'Post Not Found'));
    // user owned
    if (post.user.toString() !== userId)
      return next(new HttpException(403, message));
    return true;
  } catch (error) {
    return next(error);
  }
}
