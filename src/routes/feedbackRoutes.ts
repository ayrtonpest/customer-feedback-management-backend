import { Router } from 'express';
import { submitFeedback, getAllFeedback } from '../controllers/feedbackController';
import { isAdmin } from '../middleware/authorization';
import { authenticateToken } from '../middleware/authentication';

const router = Router();

router.post('/', authenticateToken, submitFeedback);
router.get('/', authenticateToken, isAdmin, getAllFeedback);

export default router;