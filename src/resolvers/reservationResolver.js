const reservationService = require('../services/reservationService');

const resolvers = {
  Query: {
    getReservations: async () => await reservationService.fetchAllReservations(),
    getReservation: async (_, { id }) => await reservationService.fetchReservationById(id),
  },
};

module.exports = resolvers;
