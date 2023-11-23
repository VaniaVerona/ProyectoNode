const eventoService = require("../service/eventoService");

const eventoController = {

  createEvento: async (req, res) => {
    try {
      const payload = req.body;
      
      const eventoCreated = await eventoService.createEvento(payload);
  
      if (eventoCreated) {
        res.status(201).json({ message: "Evento creado con éxito", evento: eventoCreated });
      } else {
        res.status(500).json({ error: "Error al crear el evento" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al crear el evento: " + error.message });
    }
  },
  
  getAllEventos: async (req, res) => {
    try {
      const eventoFounded = await eventoService.getEventos();
      if(eventoFounded.length > 0 ) {
        res.status(200).json(eventoFounded);
      } else  {
        res.status(404).send({
          message:"eventos no founded"
        });
      }
    } catch (e) {
      res
      .status(500)
      .json({ message: "Error al obtener los eventos" + e.message});
    }
  },
  
  getEventoById: async (req, res) => {
    const { id } = req.params;
    try {
      const evento = await eventoService.getEventoById(id);
      if (evento) {
        res.json(evento);
      } else {
        res.status(404).json({ error: "Evento no encontrado" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener el evento" });
    }
  },
  updateEvento: async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
      const eventoUpdated = await eventoService.updateEvento(id, payload);
      if (eventoUpdated) {
        res.json({ message: "Evento actualizado con éxito", evento: eventoUpdated });
      } else {
        res.status(404).json({ error: "Evento no encontrado" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al actualizar el evento: " + error.message });
    }
  },
  deleteEvento: async (req, res) => {
    const { id } = req.params;
    try {
      const eventoDeleted = await eventoService.deleteEvento(id);
      if (eventoDeleted) {
        res.json({ message: "Evento eliminado con éxito" });
      } else {
        res.status(404).json({ error: "Evento no encontrado" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al eliminar el evento: " + error.message });
    }
  },
};

module.exports = eventoController;
