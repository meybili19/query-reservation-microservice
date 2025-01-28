const reservationService = require('../services/reservationService');

const reservationResolver = {
  getAllReservations: async () => {
    return await reservationService.getAllReservations();
  },
  getReservationById: async ({ id }) => {
    return await reservationService.getReservationById(id);
  },
};

module.exports = reservationResolver;
