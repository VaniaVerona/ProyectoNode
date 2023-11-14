const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

router.post('/event', eventoController.createEvento);
router.get('/event', eventoController.getAllEventos);
router.get('/event/:id', eventoController.getEventoById);
router.put('/event/:id', eventoController.updateEvento);
router.delete('/event/:id', eventoController.deleteEvento);

module.exports = router;


