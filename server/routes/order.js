import express from 'express';
import auth from '../middleware/auth';
import order from '../controllers/order';

const router = express.Router();

// order
router.post('/', auth, order);

export default router;
