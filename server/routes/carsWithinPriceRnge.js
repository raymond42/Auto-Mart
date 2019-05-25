import express from 'express';
import getUnsoldCarsWithinPriceRange from '../controllers/unsoldPriceRange';

const router = express.Router();

// get cars within price range
router.get('/available/range', getUnsoldCarsWithinPriceRange);

export default router;
