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

router.get(
  "/:id",
  (req, res) => {
      const { id } = req.params;
      const booking = getBookingById(id);

      res.status(200).json(booking);
  },
  notFoundErrorHandler
);

router.post(
  "/",
  authMiddleware,
  (req, res) => {
    console.log("blajlabfb")
      const {
        userId,
        propertyId,
        checkinDate,
        checkoutDate,
        numberOfGuests,
        totalPrice,
        bookingStatus,
      } = req.body;
      const newBooking = createBooking(
        userId,
        propertyId,
        checkinDate,
        checkoutDate,
        numberOfGuests,
        totalPrice,
        bookingStatus
      );
      res.status(201).json(newBooking);
  },
  errorHandler
);

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

export default router;
