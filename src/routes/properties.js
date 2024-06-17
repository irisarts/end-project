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

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const property = await getPropertyById(id);

    if (!property) {
      res.status(404).json(property);
    } else {
      res.status(200).json(property);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
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
  try {
    const newProperty = await createProperty(
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
    if (!newProperty) {
      res.status(400).json(newProperty);
    } else {
      res.status(201).json(newProperty);
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

router.use(errorHandler);

export default router;
