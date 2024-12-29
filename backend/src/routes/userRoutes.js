import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import { getUsers, createUser } from '../controllers/userController.js';

const router = express.Router();

// User routes
router.get('/', authenticate, getUsers);
router.post('/', authenticate, createUser);

export default router;
