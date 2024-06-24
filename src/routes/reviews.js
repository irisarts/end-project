import express from "express";
import viewReviews from "../services/reviews/viewReviews.js";
import getReviewById from "../services/reviews/getReviewById.js";
import createReview from "../services/reviews/createReviews.js";
import deleteReview from "../services/reviews/deleteReviews.js";
import updateReviewById from "../services/reviews/updateReviews.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import authMiddleware from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const reviews = await viewReviews();
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const review = await getReviewById(id);
    if (!review) {
      res.status(404).json(review);
    } else {
      res.status(200).json(review);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  const { userId, propertyId, rating, comment } = req.body;
  try {
    const newReview = await createReview(userId, propertyId, rating, comment);
    if (!newReview) {
      res.status(400).json(newReview);
    } else {
      res.status(201).json(newReview);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const { userId, propertyId, rating, comment } = req.body;
  try {
    const updatedReview = await updateReviewById(
      id,
      userId,
      propertyId,
      rating,
      comment
    );
    if (!updatedReview) {
      res.status(404).json(updatedReview);
    } else {
      res.status(200).json(updatedReview);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedReviewId = await deleteReview(id);
    if (deletedReviewId) {
      res
        .status(200)
        .send({ message: `Review with id ${id} was successfully deleted` });
    } else {
      res.status(404).json({
        message: `Review with id ${id} not found`,
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
