import express from 'express';
import signup from '../controllers/users';
import signin from '../controllers/signin';

const router = express.Router();

// signup
router.post('/signup', signup);

// signin
router.post('/signin', signin);

export default router;
