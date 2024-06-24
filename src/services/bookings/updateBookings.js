import { PrismaClient } from "@prisma/client";

const updateBookingById = async (
  id,
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
) => {
  const prisma = new PrismaClient();
  try {
  const booking = await prisma.booking.update({
    where: { id },
    data: {
    userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
    }
  })

  if (!booking) {
    return null;
  }

  booking.userId = userId ?? booking.userId;
  booking.propertyId = propertyId ?? booking.propertyId;
  booking.checkinDate = checkinDate ?? booking.checkinDate;
  booking.checkoutDate = checkoutDate ?? booking.checkoutDate;
  booking.numberOfGuests = numberOfGuests ?? booking.numberOfGuests;
  booking.totalPrice = totalPrice ?? booking.totalPrice;
  booking.bookingStatus = bookingStatus ?? booking.bookingStatus;

  return booking;
} catch (error) {
  return null;
} finally {
  await prisma.$disconnect();
}
};

export default updateBookingById;
