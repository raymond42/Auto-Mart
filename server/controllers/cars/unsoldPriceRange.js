/* eslint-disable camelcase */
import cars from '../../models/cars';
import validateRange from '../../helpers/priceRange';

const getUnsoldCarsWithinPriceRange = (req, res) => {
  const { error } = validateRange.validation(req.query);
  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
    return;
  }
  const { min_price, max_price, status } = req.query;
  const unsoldCars = cars.filter(car => car.status === status);
  const PriceRange = unsoldCars.filter(p => p.price >= min_price && p.price <= max_price);
  if (!PriceRange.length) {
    res.status(404).json({
      status: 404,
      message: 'there are no cars within that price range not found',
      data: [],
    });
    return;
  }
  res.status(200).json({
    status: 200,
    data: PriceRange,
  });
};
export default getUnsoldCarsWithinPriceRange;
