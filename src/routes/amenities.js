import express from "express";
import viewAmenities from "../services/amenities/viewAmenities.js";
import getAmenityById from "../services/amenities/getAmenityById.js";
import createAmenity from "../services/amenities/createAmenities.js";
import updateAmenityById from "../services/amenities/updateAmenities.js";
import deleteAmenity from "../services/amenities/deleteAmenities.js";
import authMiddleware from "../middleware/auth.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import errorHandler from "../middleware/errorHandler.js";

const router = express.Router();

router.get(
  "/",
  (req, res) => {
      const amenities = viewAmenities();
      res.status(200).json(amenities);
  },
  notFoundErrorHandler
);

router.get(
  "/:id",
  (req, res) => {
      const { id } = req.params;
      const amenity = getAmenityById(id);
      res.status(200).json(amenity);
  },
  notFoundErrorHandler
);

router.post(
  "/",
  authMiddleware,
  (req, res) => {
    const { name } = req.body;
    const newAmenity = createAmenity(name);
    res.status(201).json(newAmenity);
  },
  errorHandler
);

router.put(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const updatedAmenity = updateAmenityById(id, name);
    res.status(200).json(updatedAmenity);
  },
  notFoundErrorHandler
);

router.delete(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const deletedAmenityId = deleteAmenity(id);
    if (deletedAmenityId) {
      res.status(200).send({
      message: `Amenity with id ${id} successfully deleted`,
      deletedAmenityId,
      });
  } else {
      res.status(404).json({
      message: `Amenity with id ${deletedAmenityId} not found`,
      });
  }
  },
  notFoundErrorHandler
);

export default router;
