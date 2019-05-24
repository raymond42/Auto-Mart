import cars from '../models/cars';

const getUsedUnsoldCars = (req, res) => {
  const usedUnsoldCars = cars.filter(car => car.status === 'available' && car.state === 'used');
  if (!usedUnsoldCars) {
    res.status(404).json({
      status: 404,
      error: 'not found',
    });
    return;
  }
  res.status(200).json({
    status: 200,
    data: usedUnsoldCars,
  });
};

export default getUsedUnsoldCars;
