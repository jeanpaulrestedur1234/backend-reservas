const ReservationRepository = require('../../ports/repositories/ReservationRepository');
const { Reservation, User, Space } = require('../../domain/models');
const { Op } = require('sequelize');
class SequelizeReservationRepository extends ReservationRepository {
  async create(data) {
    const { userId, spaceId } = data;

    // Verificar que el usuario exista
    const user = await User.findByPk(userId);
    if (!user) {
        throw new Error(`Usuario con id ${userId} no existe`);
    }

    // Verificar que el espacio exista
    const space = await Space.findByPk(spaceId);
    if (!space) {
        throw new Error(`Espacio con id ${spaceId} no existe`);
    }

    // Si todo está ok, crear la reserva
    return await Reservation.create(data);
    }


  async findById(id) {
    return await Reservation.findByPk(id, {
      include: [
        { model: User, as: 'user' },
        { model: Space, as: 'space' },
      ],
    });
  }

  async findAll(filters = {}) {
  const whereClause = {};

  if (filters.spaceId) {
    whereClause.spaceId = filters.spaceId;
  }

  if (filters.userId) {
    whereClause.userId = filters.userId;
  }

  if (filters.startDate && filters.endDate) {
    whereClause.startTime = {
      [Op.between]: [filters.startDate, filters.endDate],
    };
  } else if (filters.startDate) {
    whereClause.startTime = {
      [Op.gte]: filters.startDate,
    };
  } else if (filters.endDate) {
    whereClause.startTime = {
      [Op.lte]: filters.endDate,
    };
  }
  console.log('whereClause', whereClause);

  return await Reservation.findAll({
    where: whereClause,
    include: [
      { model: User, as: 'user' },
      { model: Space, as: 'space' },
    ],
    order: [['startTime', 'ASC']],
  });
}

  async delete(id) {
    const deletedCount = await Reservation.destroy({ where: { id } });
    if (deletedCount === 0) {
        throw new Error(`Reserva con id ${id} no encontrada`);
    }
    return deletedCount; // o retornar algún mensaje o booleano si quieres
    }

}

module.exports = SequelizeReservationRepository;
