import express from "express";
import viewBookings from "../services/bookings/viewBookings.js";
import getBookingById from "../services/bookings/getBookingById.js";
import createBooking from "../services/bookings/createBookings.js";
import updateBookingById from "../services/bookings/updateBookings.js";
import deleteBooking from "../services/bookings/deleteBookings.js";
import authMiddleware from "../middleware/auth.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import errorHandler from "../middleware/errorHandler.js";

const router = express.Router();

router.get(
  "/",
  (req, res) => {
    const { userId, propertyId } = req.query;
    const bookings = viewBookings(userId, propertyId);
    res.status(200).json(bookings);
  },
  notFoundErrorHandler
);

// router.get("/:id", async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const booking = await getBookingById(id);
//     // console.log(booking);
//     if (!booking) {
      
//       res.status(404).json(booking);
//     } else {
//       console.log(booking);
//       res.status(303).json(booking);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const booking = await getBookingById(id);

    console.log("booking:",booking);

    if (!booking) {
      console.log("booking kan niet gevonden worden")      
      res.status(404).json(booking);
    } else {
      console.log("booking gevonden:",booking);
      res.status(303).json(booking);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  const {
    userId,
    propertyId,
    checkinDate,
    checkoutDate,
    numberOfGuests,
    totalPrice,
    bookingStatus,
  } = req.body;
  try {
    const newBooking = await createBooking(
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus
    );
    if (!newBooking) {
      res.status(400).json(newBooking);
    } else {
      res.status(201).json(newBooking);
    }
  } catch (error) {
    next(error);
  }
});

router.put(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const {
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus,
    } = req.body;
    const updatedBooking = updateBookingById(
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus
    );

    if (!updateBookingById) {
      return res
        .status(404)
        .json({ error: `Booking with ${id} was not found!` });
    }

    res.status(200).json(updatedBooking);
  },
  notFoundErrorHandler
);

router.delete(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const deletedBookingId = deleteBooking(id);

    res.status(200).json({
      message: `Booking with id ${deletedBookingId} was deleted`,
    });
  },
  notFoundErrorHandler
);

router.use(notFoundErrorHandler);
router.use(errorHandler);

export default router;
