const reservationModel = require('../models/reservationModel');

const fetchAllReservations = async () => {
  return await reservationModel.getAllReservations();
};

const fetchReservationById = async (id) => {
  return await reservationModel.getReservationById(id);
};

module.exports = {
  fetchAllReservations,
  fetchReservationById,
};
