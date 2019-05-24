import express from 'express';
import auth from '../middleware/auth';
import allposted from '../controllers/allPosted';

const router = express.Router();

// get all posted car ads
router.get('/posted', auth, allposted);

export default router;
