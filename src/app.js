const express = require('express');
const app = express();
const eventoRouter = require('./router'); 

require('./db'); 

app.use(express.json()); 

app.use('/events', eventoRouter);

app.get('/', (req, res) => {
  res.send('Bienvenido a la aplicación de eventos');
});

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});

