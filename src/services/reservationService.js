const db = require('../config/db');

const getAllReservations = async () => {
  const [rows] = await db.query('SELECT * FROM Reservations');
  return rows.map(row => ({
    id: row.id,
    userId: row.user_id,
    vehicleId: row.car_id,
    parkingLotId: row.parking_lot_id,
    startDate: row.start_date,
    endDate: row.end_date,
    status: row.status,
    totalAmount: row.total_amount,
  }));
};

const getReservationById = async (id) => {
  const [rows] = await db.query('SELECT * FROM Reservations WHERE id = ?', [id]);
  if (rows.length === 0) return null;
  const row = rows[0];
  return {
    id: row.id,
    userId: row.user_id,
    vehicleId: row.car_id,
    parkingLotId: row.parking_lot_id,
    startDate: row.start_date,
    endDate: row.end_date,
    status: row.status,
    totalAmount: row.total_amount,
  };
};

module.exports = { getAllReservations, getReservationById };
