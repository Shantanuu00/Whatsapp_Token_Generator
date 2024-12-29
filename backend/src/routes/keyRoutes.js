import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import { getAllKeys, createKey } from '../controllers/keyController.js';

const router = express.Router();

// Key routes
router.get('/', authenticate, getAllKeys);
router.post('/', authenticate, createKey);

export default router;
