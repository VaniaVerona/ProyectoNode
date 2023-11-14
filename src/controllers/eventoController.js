const Evento = require('../models/evento');

exports.createEvento = async (req, res) => {
  try {
    const evento = await Evento.create(req.body);
    res.status(201).json(evento);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el evento' });
  }
};

exports.getAllEventos = async (req, res) => {
  try {
    const eventos = await Evento.find();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los eventos' });
  }
};

exports.getEventoById = async (req, res) => {
  const { id } = req.params;
  try {
    const evento = await Evento.findById(id);
    if (evento) {
      res.json(evento);
    } else {
      res.status(404).json({ error: 'Evento no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el evento' });
  }
};

exports.updateEvento = async (req, res) => {
  const { id } = req.params;
  try {
    const evento = await Evento.findByIdAndUpdate(id, req.body, { new: true });
    if (evento) {
      res.json(evento);
    } else {
      res.status(404).json({ error: 'Evento no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el evento' });
  }
};

exports.deleteEvento = async (req, res) => {
  const { id } = req.params;
  try {
    const evento = await Evento.findByIdAndDelete(id);
    if (evento) {
      res.json({ message: 'Evento eliminado' });
    } else {
      res.status(404).json({ error: 'Evento no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el evento' });
  }
};

