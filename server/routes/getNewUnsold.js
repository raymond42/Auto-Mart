import express from 'express';
import auth from '../middleware/auth';
import getNewUnsoldCars from '../controllers/viewNewunsold';

const router = express.Router();

// get all unsold cars
router.get('/available/new', auth, getNewUnsoldCars);

export default router;
