const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://vanicivil:ZFwzBsfA2sHyOwGn@cluster0.kgcbxkq.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => console.error('Error de conexión a la base de datos:', error));

module.exports = mongoose;

