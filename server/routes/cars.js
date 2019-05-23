import express from 'express';
import ads from '../controllers/ads';
import auth from '../middleware/auth';
import markCarSold from '../controllers/markCar';

const router = express.Router();

// car sale ads
router.post('/', auth, ads);

// mark car post as sold
router.patch('/:id', auth, markCarSold);

export default router;
