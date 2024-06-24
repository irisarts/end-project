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

router.get("/", async (req, res, next) => {
  try {
    const { userId, propertyId } = req.query;
    const bookings = await viewBookings(userId, propertyId);
    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const booking = await getBookingById(id);

    if (!booking) {    
      res.status(404).json({error: "booking kan niet gevonden worden"});
    } else {
      res.status(200).json(booking);
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
  async (req, res,next) => {
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
    try {
    const updatedBooking = await updateBookingById(
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus
    );
    if (!updatedBooking) {
      res.status(404).json(updatedBooking);
    } else {
      res.status(200).json(updatedBooking);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedBookingId = await deleteBooking(id);

    if (!deletedBookingId) {
      res.status(404).json({ error: `Booking with id ${id} was not found` });
    } else {
      res.status(200).json({ message: `Booking with id ${deletedBookingId} was deleted` });
    }
  } catch (error) {
    next(error);
  }
});

router.use(notFoundErrorHandler);
router.use(errorHandler);

export default router;
