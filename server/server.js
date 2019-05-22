/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users';
import carRoute from './routes/cars';
import orderRoute from './routes/order';

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/auth', usersRoutes);
app.use('/api/v1/auth', usersRoutes);
app.use('/api/v1/car', carRoute);
app.use('/api/v1/order', orderRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => { console.log(`app is running on ${port}...`); });

export default app;
