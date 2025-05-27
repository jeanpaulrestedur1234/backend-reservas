
const swaggerJSDoc = require('swagger-jsdoc');
const Reservation = require('./schemas/ReservationSchema');
const User = require('./schemas/UserSchema');
const Space = require('./schemas/SpaceSchema');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Reservas',
    version: '1.0.0',
    description: 'Documentación de la API',
  },
  servers: [{ url: 'http://localhost:3000' }],
  components: {
    schemas: {
      ...Reservation,
      ...User,
      ...Space,
      Error: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Error interno del servidor' },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['src/adapters/http/routes/*.js'], 
};

module.exports = swaggerJSDoc(options);