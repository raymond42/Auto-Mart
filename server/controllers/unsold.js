import cars from '../models/cars';

const getUnsoldCars = (req, res) => {
  const unsoldCars = cars.filter(car => car.status === 'available');
  if (unsoldCars.length) {
    res.status(200).json({
      status: 200,
      data: unsoldCars,
    });
    return;
  }
  res.status(404).json({
    status: 404,
    error: 'not found',
  });
};

export default getUnsoldCars;
