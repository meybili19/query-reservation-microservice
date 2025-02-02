const reservationService = require('../services/reservationService');

const reservationResolver = {
  getReservationById: async ({ id }) => {
    return await reservationService.getReservationById(id);
  },
};

module.exports = reservationResolver;
