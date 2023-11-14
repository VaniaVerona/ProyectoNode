const mongoose = require('mongoose');

const eventoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  description: String,
  image: {
    type: String,
  },
  place: String,
  precio: {
    type: Number,
    min: 0,
  },
  capacity: {
    type: Number,
    min: 0,
  },
  assistance: {
    type: Number,
    min: 0,
  },
  estimate: {
    type: Number,  
    min: 0,
  },
});

const Evento = mongoose.model('Evento', eventoSchema);

module.exports = Evento;