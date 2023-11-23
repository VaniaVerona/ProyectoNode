const eventoDal = require("../repositories/eventoDal");

const eventoService = {
  getEventos: async () => {
    try {
      const eventos = await eventoDal.getAllEvents();
      if (eventos && eventos.length > 0) {
        return eventos;
      } else {
        throw new Error("No hay eventos");
      }
    } catch (error) {
      throw new Error("Error al obtener eventos desde el servicio");
    }
  },
  getEventoById: async (id) => {
    try {
      const evento = await eventoDal.findById(id);
      if (evento) {
        return evento;
      } else {
        throw new Error("Evento no encontrado");
      }
    } catch (error) {
      throw new Error("Error al obtener el evento desde el servicio");
    }
  },
  createEvento: async (payload) => {
    try {
      if (!payload) {
        throw new Error("El payload no puede estar vacío");
      }

      const eventoCreated = await eventoDal.createEvento(payload);
      return eventoCreated;
    } catch (error) {
      throw new Error("Error al crear el evento desde el servicio: " + error.message);
    }
  },
  updateEvento: async (id, payload) => {
    try {
      const eventoUpdated = await eventoDal.updateEvento(id, payload);
      return eventoUpdated;
    } catch (error) {
      throw new Error("Error al actualizar el evento desde el servicio: " + error.message);
    }
  },
  deleteEvento: async (id) => {
    try {
      const eventoDeleted = await eventoDal.deleteEvento(id);
      return eventoDeleted;
    } catch (error) {
      throw new Error("Error al eliminar el evento desde el servicio: " + error.message);
    }
  },
};

module.exports = eventoService;
