const cars = require('./cars-model')

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  cars.getById(req.params.id).then(car => {
    if(car.length < 1) return res.status(404).json({message: `car with ${req.params.id} is not found`})
    next()
  })
  
}

const checkCarPayload = (req, res, next) => {
  const { body } = req;
  let missingField;
  if(!("vin" in body)) missingField = "vin";
  if(!("make" in body)) missingField = "make";
  if(!("model" in body)) missingField = "model";
  if(!("mileage" in body)) missingField = "mileage";
  // DO YOUR MAGIC
  if(!("vin" in body) || !("make" in body) || !("model") || !("mileage" in body))
  return res.status(400).json({message: `${missingField} is missing`})

  next()
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload
}
