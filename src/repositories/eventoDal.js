const Evento = require("../models/evento");

const eventoDal = {
  getAllEvents: async () => {
    return await Evento.find();
  },
  findById: async (id) => {
    return await Evento.findById(id);
  },
  createEvento: async (payload) => {
    try {
      const evento = await Evento.create(payload);
      return evento;
    } catch (error) {
      throw new Error("Error al crear el evento en la base de datos");
    }
  },
  updateEvento: async (id, payload) => {
    return await Evento.findByIdAndUpdate(id, payload, { new: true });
  },
  deleteEvento: async (id) => {
    return await Evento.findByIdAndDelete(id);
  },
};

module.exports = eventoDal;
