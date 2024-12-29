import express from 'express';
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware.js';
import { createReseller, viewResellers } from '../controllers/adminController.js';

const router = express.Router();

// Admin-specific routes
router.post('/resellers', authenticate, authorizeAdmin, createReseller);
router.get('/resellers', authenticate, authorizeAdmin, viewResellers);

export default router;
