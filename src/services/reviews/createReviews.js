import reviewData from "../../data/reviews.json" assert { type: "json" };
import { v4 as uuid } from "uuid";

const createReview = (userId, propertyId, rating, comment) => {
  const newReview = {
    id: uuid(),
    userId,
    propertyId,
    rating,
    comment
  };

  if (!userId) {
    throw new Error(`userId was not defined`);
}

  reviewData.reviews.push(newReview)
  return newReview;
};

export default createReview;
