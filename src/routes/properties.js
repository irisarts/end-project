import express from "express";
import viewProperties from "../services/properties/viewProperties.js";
import getPropertyById from "../services/properties/getPropertyById.js";
import createProperty from "../services/properties/createProperties.js";
import updatePropertyById from "../services/properties/updateProperties.js";
import deleteProperties from "../services/properties/deleteProperties.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import authMiddleware from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";

const router = express.Router();

router.get(
  "/",
  (req, res) => {
    const { hostId, location, pricePerNight } = req.query;
      const properties = viewProperties(hostId, location, pricePerNight);
      res.status(200).json(properties);
  },
  notFoundErrorHandler
);

router.get(
  "/:id",
  (req, res) => {
      const { id } = req.params;
      const property = getPropertyById(id);
      res.status(200).json(property);

  },
  notFoundErrorHandler
);

router.post(
  "/",
  authMiddleware,
  (req, res) => {
    const {
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating,
    } = req.body;
    const newProperty = createProperty(
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating
    );
    res.status(201).json(newProperty);
  },
  errorHandler
);

router.put(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const {
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating,
    } = req.body;
    const updatedProperty = updatePropertyById(
      id,
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating
    );
    res.status(200).json(updatedProperty);
  },
  notFoundErrorHandler
);

router.delete(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const deletedPropertyId = deleteProperties(id);
    res.status(200).json({
      message: `Property with id ${deletedPropertyId} was deleted`,
    });
  },
  notFoundErrorHandler
);

export default router;
