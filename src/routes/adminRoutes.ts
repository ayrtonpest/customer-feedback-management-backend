import { Router } from 'express';
import { deleteUser } from '../controllers/userController';
import { isAdmin } from '../middleware/authorization';
import { authenticateToken } from '../middleware/authentication';

const router = Router();

router.delete('/users/:id', authenticateToken, isAdmin, deleteUser);

export default router;