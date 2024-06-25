import { Router } from 'express';
import adminRoutes from './adminRoutes';
import userRoutes from './userRoutes';
import feedbackRoutes from './feedbackRoutes';

const router = Router();

router.use('/admin', adminRoutes);
router.use('/users', userRoutes);
router.use('/feedback', feedbackRoutes);

export default router;