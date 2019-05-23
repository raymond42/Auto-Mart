import moment from 'moment';
import validateUpdateStatus from '../helpers/markCar';
import cars from '../models/cars';

const markCarSold = (req, res) => {
  const { error } = validateUpdateStatus.validation(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
    return;
  }
  const carId = req.params.id;
  const carIndex = cars.findIndex(o => o.id === parseInt(carId, 10));
  if (carIndex > -1) {
    const originalCar = cars[carIndex];
    if (originalCar.status !== 'available') {
      res.status(400).json({
        status: 400,
        error: 'you can not change the status of this car',
      });
      return;
    }
    const newCar = {
      id: originalCar.id,
      owner: originalCar.owner,
      createdOn: moment().format('LL'),
      state: originalCar.state,
      status: req.body.status,
      price: originalCar.price,
      manufacturer: originalCar.manufacturer,
      model: originalCar.model,
      body_type: originalCar.body_type,
    };
    cars[carIndex] = {
      id: originalCar.id,
      owner: originalCar.owner,
      createdOn: newCar.createdOn,
      state: originalCar.state,
      status: newCar.status,
      price: originalCar.price,
      manufacturer: originalCar.manufacturer,
      model: originalCar.model,
      body_type: originalCar.body_type,
    };
    res.status(200).json({
      status: 200,
      data: newCar,
    });
    return;
  }
  res.status(404).json({
    status: 404,
    error: 'car post not found',
  });
};

export default markCarSold;
