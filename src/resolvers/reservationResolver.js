const reservationService = require('../services/reservationService');

const reservationResolver = {
  getReservationById: async ({ id }) => {
    return await reservationService.getReservationById(id);
  },
  getAllReservations: async () => {
    return await reservationService.getAllReservations();
  },
};

module.exports = reservationResolver;