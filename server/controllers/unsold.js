import cars from '../models/cars';

const getUnsoldCars = (req, res) => {
  const unsoldCars = cars.filter(car => car.status === 'available');
  if (!unsoldCars.length) {
    res.status(404).json({
      status: 404,
      error: 'there is no unsold cars',
    });
    return;
  }
  res.status(200).json({
    status: 200,
    data: unsoldCars,
  });
};

export default getUnsoldCars;
