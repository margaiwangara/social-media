import { Router } from 'express';
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
} from '../controllers/post';

const router: Router = Router();

router
  .route('/')
  .post(createPost)
  .get(getPosts);

router
  .route('/:id')
  .get(getPost)
  .patch(updatePost)
  .delete(deletePost);

export default router;
