import express from 'express';
import auth from '../middleware/auth';
import getCars from '../controllers/unsold';

const router = express.Router();

// get all unsold cars
router.get('/available', auth, getCars);

export default router;
