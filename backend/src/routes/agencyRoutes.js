import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import { getAllAgencies, createAgency } from '../controllers/agencyController.js';

const router = express.Router();

// Agency routes
router.get('/', authenticate, getAllAgencies);
router.post('/', authenticate, createAgency);

export default router;
