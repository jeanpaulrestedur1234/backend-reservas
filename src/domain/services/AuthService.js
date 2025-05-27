const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../domain/models/User');

const SECRET_KEY = 'mi_clave_secreta';

class AuthService {
  async registerUser({ name, email, password }) {
    const existing = await User.findOne({ where: { email } });
    if (existing) throw new Error('Email ya registrado');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    return { id: user.id, name: user.name, email: user.email };
  }

  async loginUser({ email, password }) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('Usuario no encontrado');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Contraseña incorrecta');

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    return { token };
  }
}

module.exports = new AuthService();
