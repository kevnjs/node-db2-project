// DO YOUR MAGIC
const express = require('express');
const router = express.Router();
const cars = require('./cars-model');
const mWare = require('./cars-middleware');

router.get('/', (req, res) => {
    cars.getAll().then(car => res.status(200).json(car))
    .catch(err => res.status(500).json(err))
})

router.get('/:id', mWare.checkCarId, (req, res) => {
    cars.getById(req.params.id).then(car => res.status(200).json(...car))
    .catch(err => res.status(500).json(err))
})

router.post('/', mWare.checkCarPayload, (req, res) => {
    cars.create(req.body).then(car => res.status(201).json(...car))
})





module.exports = router;