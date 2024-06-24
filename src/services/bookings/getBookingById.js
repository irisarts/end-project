import { PrismaClient } from "@prisma/client";

const getBookingById = async (id) => {
  try {
    const prisma = new PrismaClient();
    const booking = await prisma.booking.findUnique({
      where: { id },
    });

    return booking;
  } catch (error) {
    throw new Error("Database failed.");
  }
  
};

export default getBookingById;