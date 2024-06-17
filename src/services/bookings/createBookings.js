import { v4 as uuid } from "uuid";
import { PrismaClient } from "@prisma/client";

const createBooking = async (
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
) => {
  try {
    const prisma = new PrismaClient();
    //   const newBooking = {
    //     id: uuid(),
    //     userId,
    //     propertyId,
    //     checkinDate,
    //     checkoutDate,
    //     numberOfGuests,
    //     totalPrice,
    //     bookingStatus,
    //   };

    //   bookingData.bookings.push(newBooking);
    return await prisma.booking.create({
      data: {
        id: uuid(),
        userId,
        propertyId,
        checkinDate,
        checkoutDate,
        numberOfGuests,
        totalPrice,
        bookingStatus,
      },
    });
  } catch (error) {
    return null;
  }
};
export default createBooking;
