const express = require('express');
const Evento = require('./models/evento.js');
require('./db'); 

const app = express(); 

app.use(express.json()); //  para poder leer el cuerpo de las solicitudes POST

app.post("/eventos", async (req, res) => {
  
  const newEvents = [
    {
      name: "Collectivities Party",
      category: "Food",
      date: "2021-12-12",
      description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      image: "https://i.postimg.cc/kXWrBjXC/collectivities-party.jpg",
      place: "Multi Space",
      price: 10,
      capacity: 50000,
      assistance: 42756
    },
    {
      name: "Just for your kitchen",
      category: "Books",
      date: "2023-09-14",
      description: "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      image: "https://i.postimg.cc/PxJKYqWZ/just4-kitchen.jpg",
      place: "Multi Space",
      price: 2,
      capacity: 50000,
      estimate: 5000
    }
  ];

  const eventos = await Evento.insertMany(newEvents);
  res.json(eventos);
}); 

app.put("/eventos/:name", async (req, res) => {
  const eventName = req.params.name;

  const eventoParaActualizar = await Evento.findOne({ name: eventName });

  if (eventoParaActualizar) {
    eventoParaActualizar.capacity = 1000000; 
    const eventoActualizado = await eventoParaActualizar.save();
    res.json(eventoActualizado);
  } else {
    res.status(404).send('Evento no encontrado');
  }
});

app.delete("/eventos/:name", async (req, res) => {
  const eventName = req.params.name;

  const eventoParaEliminar = await Evento.findOneAndDelete({ name: eventName });

  if (eventoParaEliminar) {
    res.json({ message: 'Evento eliminado' });
  } else {
    res.status(404).send('Evento no encontrado');
  }
});

app.get("/eventos", async (req, res) => {
  let eventosEncontrados = await Evento.find();
  res.json(eventosEncontrados);
});

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
