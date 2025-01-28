class Reservations {
  constructor(id, userId, vehicleId, parkingLotId, startDate, endDate, status, totalAmount) {
    this.id = id;
    this.userId = userId;
    this.vehicleId = vehicleId;
    this.parkingLotId = parkingLotId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
    this.totalAmount = totalAmount;
  }
}

module.exports = Reservations;
