const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors'); 
const app = express();
const port = 3000;

// Configurar CORS para permitir acceso desde el frontend
app.use(cors({
    origin: '*',
  }));

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rutas
app.use('/api', routes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
