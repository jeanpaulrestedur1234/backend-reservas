const express = require('express');
const bodyParser = require('body-parser');
const reservationRoutes = require('./adapters/http/routes/reservationRoutes');
const authRoutes = require('./adapters/http/routes/authRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../config/docs/swagger');
const app = express();

app.use(bodyParser.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
app.use('/reservations', reservationRoutes);
app.use('/auth', authRoutes);
// 404
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint no encontrado' });
});

// 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

module.exports = app;
