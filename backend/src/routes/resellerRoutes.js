import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import { getResellers, createReseller } from '../controllers/resellerController.js';

const router = express.Router();

// Reseller routes
router.get('/', authenticate, getResellers);
router.post('/', authenticate, createReseller);

export default router;

