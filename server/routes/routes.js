import express from 'express';
import ads from '../controllers/cars/ads';
import auth from '../middleware/auth';
import signup from '../controllers/users/users';
import signin from '../controllers/users/signin';
import markCarSold from '../controllers/cars/markCar';
import getCar from '../controllers/cars/specific';
import deletePosted from '../controllers/cars/delete';
import getUnsoldCarsWithinPriceRange from '../controllers/cars/unsoldPriceRange';
import allposted from '../controllers/cars/allPosted';
import getUsedUnsoldCars from '../controllers/cars/viewUsedUnsold';
import order from '../controllers/orders/order';
import getUnsoldCars from '../controllers/cars/unsold';
import updatePriceOrder from '../controllers/orders/updatePriceOrder';
import getNewUnsoldCars from '../controllers/cars/viewNewunsold';
import updatePriceCar from '../controllers/cars/updatePosted';

const router = express.Router();

// signup
router.post('/auth/signup', signup);

// signin
router.post('/auth/signin', signin);

// post a car sale Ad
router.post('/car', auth, ads);

// create a purchase order
router.post('/order', auth, order);

// update the price of purchase order
router.patch('/order/:id/price', auth, updatePriceOrder);

// mark car post as sold
router.patch('/car/:id/status', auth, markCarSold);

// update the price of a car post
router.patch('/car/:id/price', auth, updatePriceCar);

// get a specific car
router.get('/car/:id', auth, getCar);

// get all unsold cars
router.get('/car', auth, getUnsoldCars);

// get cars within price range
router.get('/cars', getUnsoldCarsWithinPriceRange);

// delete a car ad
router.delete('/car/:id', auth, deletePosted);

// get all posted car ads
router.get('/cars/posted', auth, allposted);

// get all used unsold cars
router.get('/cars/available/used', auth, getUsedUnsoldCars);

// get all new unsold cars
router.get('/cars/available/new', auth, getNewUnsoldCars);

export default router;
