const authService = require('../../../domain/services/AuthService');

class AuthController {
  async register(req, res) {
    try {
      const user = await authService.registerUser(req.body);
      res.status(201).json({ message: 'Usuario registrado', user });
    } catch (err) {
      const status = err.message === 'Email ya registrado' ? 400 : 500;
      res.status(status).json({ message: 'Error en registro', error: err.message });
    }
  }

  async login(req, res) {
    try {
      const result = await authService.loginUser(req.body);
      res.json({ message: 'Login exitoso', ...result });
    } catch (err) {
      const status = err.message === 'Usuario no encontrado' || err.message === 'Contraseña incorrecta' ? 401 : 500;
      res.status(status).json({ message: 'Error en login', error: err.message });
    }
  }
}

module.exports = new AuthController();
