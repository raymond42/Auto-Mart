import express from 'express';
import ads from '../controllers/ads';
import auth from '../middleware/auth';
import markCarSold from '../controllers/markCar';
import getCar from '../controllers/specific';

const router = express.Router();

// car sale ads
router.post('/', auth, ads);

// mark car post as sold
router.patch('/:id', auth, markCarSold);

// get a specific car
router.get('/:id', auth, getCar);

export default router;
