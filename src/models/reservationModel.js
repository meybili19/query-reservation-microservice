const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllReservations = async () => {
  return await prisma.reservations.findMany();
};

const getReservationById = async (id) => {
  return await prisma.reservations.findUnique({
    where: { id },
  });
};

module.exports = {
  getAllReservations,
  getReservationById,
};
