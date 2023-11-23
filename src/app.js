const express = require('express');
const router = require('./router');
require('dotenv').config();

require ("./db.js")

const swaggerUi = require('swagger-ui-express');
const swaggerDocumentConfig = require("./swagger-openapi.json");

const app = express();

app.use(express.json());

app.use('/api', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumentConfig));


app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
