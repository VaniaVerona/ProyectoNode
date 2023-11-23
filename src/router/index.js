const express = require('express');
const eventoRouter = require('../router/eventoRouter');

const router = express.Router();

router.use('/', eventoRouter);

module.exports = router;

