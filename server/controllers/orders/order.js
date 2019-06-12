/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import moment from 'moment';
import order from '../../models/order';
import ads from '../../models/ads';
import validateOrder from '../../helpers/order';

const Order = (req, res) => {
  const { error } = validateOrder.validation(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
    return;
  }

  const id = parseInt(order.length + 1, 10);
  const { car_id, amount, status } = req.body;
  const newOrder = { id, car_id, amount, status };

  const carId = ads.find(c => c.id === parseInt(newOrder.car_id, 10));
  if (!carId) {
    res.status(404).json({
      status: 404,
      message: 'car ordered not found',
    });
    return;
  }

  order.push(newOrder);
  res.status(201).json({
    status: 201,
    data: {
      id,
      car_id: newOrder.car_id,
      created_on: moment().format('LL'),
      status: newOrder.status,
      price: carId.price,
      price_offered: newOrder.amount,
    },
  });
};

export default Order;
