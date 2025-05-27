const app = require('./app');
const { sequelize } = require('./config/db');

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Conectar base de datos
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');

    // Sincronizar modelos con la base de datos (opcional en desarrollo)
    await sequelize.sync();

    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
    process.exit(1);
  }
}

startServer();
