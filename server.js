const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile.js')
const server = express();

server.use(helmet());
server.use(express.json());
const db = knex(knexConfig.development)

server.get('/', async (req, res) => {
    try {
      const cars = await db('cars');
      res.status(200).json(cars);
    } catch (err) {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    }
  });

server.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const cars = await db('cars').where({ id });

      res.status(200).json(cars);
    } catch (err) {
      res.status(500).json({ message: 'Failed to retrieve car' });
    }
  });

  server.post('/', async (req, res) => {
    try {
      const carData = req.body;
      const [ id ] = await db('cars').insert(carData);
      const newCarEntry = await db('cars').where({ id });

      res.status(201).json(newCarEntry);
    } catch (err) {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    }
  });



module.exports = server;
