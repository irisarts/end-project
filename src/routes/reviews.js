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

router.get(
  "/",
  (req, res) => {
    const reviews = viewReviews();
    res.status(200).json(reviews);
  },
  notFoundErrorHandler
);

router.get(
  "/:id",
  (req, res, next) => {
    const { id } = req.params;
    const review = getReviewById(id);
    res.status(200).json(review);
  },
  notFoundErrorHandler
);

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

router.put(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const { userId, propertyId, rating, comment } = req.body;
    const updatedReview = updateReviewById(
      id,
      userId,
      propertyId,
      rating,
      comment
    );
    res.status(200).json(updatedReview);
  },
  notFoundErrorHandler
);

router.delete(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const deletedReviewId = deleteReview(id);
    res.status(200).json({
      message: `Review with id ${deletedReviewId} was deleted`,
    });
  },
  notFoundErrorHandler
);

router.use(errorHandler);

export default router;
