class ReservationRepository {
  /**
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async create(data) {
    throw new Error('Method not implemented');
  }

  /**
   * @param {number|string} id
   * @returns {Promise<Object|null>}
   */
  async findById(id) {
    throw new Error('Method not implemented');
  }

  /**
   * @returns {Promise<Array<Object>>}
   */
  async findAll(filters) {
    throw new Error('Method not implemented');
  }

  /**
   * @param {number|string} id
   * @returns {Promise<number>} - número de registros eliminados (0 o 1)
   */
  async delete(id) {
    throw new Error('Method not implemented');
  }
}

module.exports = ReservationRepository;
