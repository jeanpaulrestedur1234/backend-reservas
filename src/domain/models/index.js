const User = require('./User');
const Space = require('./Space');
const Reservation = require('./Reservation');

// Asociaciones
Reservation.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Reservation.belongsTo(Space, { foreignKey: 'spaceId', as: 'space' });

User.hasMany(Reservation, { foreignKey: 'userId', as: 'reservations' });
Space.hasMany(Reservation, { foreignKey: 'spaceId', as: 'reservations' });


module.exports = {
  User,
  Space,
  Reservation,
};
