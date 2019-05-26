/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import usersRoutes from './routes/users';
import carRoute from './routes/cars';
import orderRoute from './routes/order';
import priceRoute from './routes/updatePrice';
import postedRoute from './routes/updatePosted';
import unsoldRoute from './routes/unsoldCars';
import allpostedRoute from './routes/getAllPosted';
import usedUnsoldCars from './routes/getusedUnsold';
import newUnsoldCars from './routes/getNewUnsold';
import carsWithinPriceRange from './routes/carsWithinPriceRnge';
import swaggerDoc from '../swagger.json';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use('/automart', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.get('/', (req, res) => res.status(200).json({
  message: 'Welcome to AutoMart',
}));

app.use('/api/v1/auth', usersRoutes);
app.use('/api/v1/auth', usersRoutes);
app.use('/api/v1/car', carRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/order', priceRoute);
app.use('/api/v1/cars', postedRoute);
app.use('/api/v1/cars', unsoldRoute);
app.use('/api/v1/cars', allpostedRoute);
app.use('/api/v1/cars', usedUnsoldCars);
app.use('/api/v1/cars', newUnsoldCars);
app.use('/api/v1/cars', carsWithinPriceRange);


const port = process.env.PORT || 4000;
app.listen(port, () => { console.log(`app is running on ${port}...`); });

export default app;
