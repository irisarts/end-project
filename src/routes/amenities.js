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

router.get("/", async (req, res, next) => {
  try {
    const amenities = await viewAmenities();
    res.status(200).json(amenities);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const amenity = await getAmenityById(id);

    if (!amenity) {
      res.status(404).json(amenity);
    } else {
      res.status(200).json(amenity);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  const { name } = req.body;
  try {
    const newAmenity = await createAmenity(name);
    if (!newAmenity) {
      res.status(400).json(newAmenity);
    } else {
      res.status(201).json(newAmenity);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedAmenity = await updateAmenityById(id, name);
    if (!updatedAmenity) {
      res.status(404).json(updatedAmenity);
    } else {
      res.status(200).json(updatedAmenity);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedAmenityId = await deleteAmenity(id);
    if (deletedAmenityId) {
      res.status(200).send({
        message: `Amenity with id ${id} successfully deleted`,
        deletedAmenityId,
      });
    } else {
      res.status(404).json({
        message: `Amenity with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

router.use(errorHandler);

export default router;
