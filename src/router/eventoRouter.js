const express = require('express');
const eventoController = require('../controllers/eventoController');
const { verifyData, verifyId } = require('../middleware/verifications');

const eventoRouter = express.Router();

eventoRouter.post('/events', verifyData, eventoController.createEvento); 
eventoRouter.get('/events', eventoController.getAllEventos);
eventoRouter.get('/events/:id', verifyId, eventoController.getEventoById);
eventoRouter.put('/events/:id', verifyId, eventoController.updateEvento);
eventoRouter.delete('/events/:id', verifyId, eventoController.deleteEvento);

module.exports = eventoRouter; 
