const { buildSchema } = require('graphql');

const reservationSchema = buildSchema(`
  type Reservations {
    id: Int
    userId: Int
    vehicleId: Int
    parkingLotId: Int
    startDate: String
    endDate: String
    status: String
    totalAmount: Float
  }

  type Query {
    getReservationById(id: Int!): Reservations
  }
`);

module.exports = reservationSchema;
