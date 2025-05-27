const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../../domain/models/User');

const SECRET_KEY = 'mi_clave_secreta'; 

class AuthController {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      const existing = await User.findOne({ where: { email } });
      if (existing) return res.status(400).json({ message: 'Email ya registrado' });

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword });

      res.status(201).json({ message: 'Usuario registrado', user: { id: user.id, name, email } });
    } catch (err) {
      res.status(500).json({ message: 'Error en registro', error: err.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ message: 'Contraseña incorrecta' });

      const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ message: 'Login exitoso', token });
    } catch (err) {
      res.status(500).json({ message: 'Error en login', error: err.message });
    }
  }
}

module.exports = new AuthController();
