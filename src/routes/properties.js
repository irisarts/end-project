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

router.get("/", async (req, res, next) => {
  try {
    const { hostId, location, pricePerNight } = req.query;
    const properties = await viewProperties(hostId, location, pricePerNight);
    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
});

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

router.put("/:id", authMiddleware, async (req, res, next) => {
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
  try {
    const updatedProperty = await updatePropertyById(
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
    if (!updatedProperty) {
      res.status(404).json(updatedProperty);
    } else {
      res.status(200).json(updatedProperty);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedPropertyId = await deleteProperties(id);
    if (deletedPropertyId) {
      res.status(200).send({
        message: `Property with id ${id} was deleted`,
      });
    } else {
      res.status(404).json({
        message: `Property with id ${id} was not found`,
      });
    }
  } catch (error) {
    if (error.message.includes("not found")) {
      res.status(404).json({ message: error.message });
    } else {
      next(error);
    }
  }
});

router.use(notFoundErrorHandler);
router.use(errorHandler);

export default router;
