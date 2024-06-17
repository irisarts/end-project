// import prisma from "../../middleware/client.js";

// const getBookingById = async (id) => {
//   try {
//     const booking = await prisma.booking.findUnique({
//       where: { id },
//     });
    
//     if (!booking) {
//       return null;
//     }
//     return booking;
//   } catch (error) {
//     throw new Error("Database failed.");
//   }
  
// };

// export default getBookingById;

import prisma from "../../middleware/client.js";

const getBookingById = async (id) => {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id },
    });

    return booking;
  } catch (error) {
    throw new Error("Database failed.");
  }
  
};

export default getBookingById;