import express from 'express';
import auth from '../middleware/auth';
import updatePrice from '../controllers/updatePrice';

const router = express.Router();

// order
router.patch('/:id', auth, updatePrice);

export default router;
