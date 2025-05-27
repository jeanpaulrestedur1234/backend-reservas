class ReservationController {
  constructor(reservationService) {
    this.reservationService = reservationService;

    // Bindear métodos para que el contexto this sea correcto al usarlos en rutas
    this.createReservation = this.createReservation.bind(this);
    this.cancelReservation = this.cancelReservation.bind(this);
    this.listReservations = this.listReservations.bind(this);
  }

  async createReservation(req, res, next) {
    try {
      const data = req.body;
      const reservation = await this.reservationService.createReservation(data);
      res.status(201).json(reservation);
    } catch (error) {
      next(error);
    }
  }

  async cancelReservation(req, res, next) {
    try {
      const id = req.params.id;
      await this.reservationService.cancelReservation(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async listReservations(req, res, next) {
    try {
      // Leer filtros desde query params (spaceId, userId, startDate, endDate)
      const filters = {
            spaceId: req.body?.spaceId,
            userId: req.body?.userId,
            startDate: req.body?.startDate,
            endDate: req.body?.endDate,
      };
      const reservations = await this.reservationService.listReservations(filters);
      res.json(reservations);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ReservationController;
