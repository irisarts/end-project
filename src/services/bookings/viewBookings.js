import { PrismaClient } from "@prisma/client";

const viewBookings = async (userId, propertyId) => {
  try {
    const prisma = new PrismaClient();
    let bookings = await prisma.booking.findMany();

    if (userId) {
      bookings = bookings.filter((booking) => booking.userId === userId);
    }

    if (propertyId) {
      bookings = bookings.filter(
        (booking) => booking.propertyId === propertyId
      );
    }

    return bookings;
  } catch (error) {
    return null;
  }
};

export default viewBookings;
