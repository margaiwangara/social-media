import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/auth';

const router: Router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
