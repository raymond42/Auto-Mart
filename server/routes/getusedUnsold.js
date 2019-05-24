import express from 'express';
import auth from '../middleware/auth';
import getUsedUnsoldCars from '../controllers/viewUsedUnsold';

const router = express.Router();

// get all unsold cars
router.get('/available/used', auth, getUsedUnsoldCars);

export default router;
