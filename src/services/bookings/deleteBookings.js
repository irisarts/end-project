import { PrismaClient } from "@prisma/client";

const deleteBooking = async (id) => {
    try {
    const prisma = new PrismaClient;
    const booking = await prisma.booking.deleteMany({
        where: { id },   
    })
return booking.count > 0 ? id : null;
} catch (error) {
    return null;
  }
};

export default deleteBooking;