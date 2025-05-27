class ReservationService {
  constructor(reservationRepository) {
    this.reservationRepository = reservationRepository;
  }

  async createReservation(data) {
    return await this.reservationRepository.create(data);
  }

  async getReservation(id) {
    return await this.reservationRepository.findById(id);
  }

  async listReservations(filters = {}) {
    return await this.reservationRepository.findAll(filters);
  }

  async cancelReservation(id) {
    return await this.reservationRepository.delete(id);
  }
}

module.exports = ReservationService;
