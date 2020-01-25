import { Router } from 'express';
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
} from '../controllers/post';
import userAuthorized from '../middleware/auth';

const router: Router = Router();

router
  .route('/')
  .post(userAuthorized, createPost)
  .get(getPosts);

router
  .route('/:id')
  .get(getPost)
  .put(userAuthorized, updatePost)
  .delete(userAuthorized, deletePost);

export default router;
