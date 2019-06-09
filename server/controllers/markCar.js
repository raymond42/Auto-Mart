import moment from 'moment';
import validateUpdateStatus from '../helpers/markCar';
import ads from '../models/ads';

const markadsold = (req, res) => {
  const { error } = validateUpdateStatus.validation(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
    return;
  }
  const carId = req.params.id;
  const carIndex = ads.findIndex(o => o.id === parseInt(carId, 10));
  if (carIndex > -1) {
    const originalCar = ads[carIndex];
    if (req.body.status !== 'sold') {
      res.status(403).json({
        status: 403,
        error: 'you can only mark a car as sold',
      });
      return;
    }
    if (req.body.status === originalCar.status) {
      res.status(400).json({
        status: 400,
        message: `The car is already marked as ${originalCar.status}`,
      });
      return;
    }
    const newCarStatus = {
      id: originalCar.id,
      email: originalCar.email,
      createdOn: moment().format('LL'),
      manufacturer: originalCar.manufacturer,
      model: originalCar.model,
      price: originalCar.price,
      state: originalCar.state,
      status: req.body.status,
    };
    ads[carIndex] = {
      id: originalCar.id,
      owner: originalCar.owner,
      createdOn: newCarStatus.createdOn,
      manufacturer: originalCar.manufacturer,
      model: originalCar.model,
      price: originalCar.price,
      state: originalCar.state,
      status: newCarStatus.status,
    };
    res.status(200).json({
      status: 200,
      data: newCarStatus,
    });
    return;
  }
  res.status(404).json({
    status: 404,
    error: 'car post not found',
  });
};

export default markadsold;
