const mongoose = require('mongoose');

const userDB = process.env.USSER_DB_CONECTION;
const passwordDB = process.env.PASSWORD_DB_CONECTION;

mongoose
  .connect(`mongodb+srv://${userDB}:${passwordDB}@cluster0.kgcbxkq.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => console.error('Error de conexión a la base de datos:', error));

module.exports = mongoose;

