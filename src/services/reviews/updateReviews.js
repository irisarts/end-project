import { PrismaClient } from "@prisma/client";

const updateReviewById = async (id, userId, propertyId, rating, comment) => {
    const prisma = new PrismaClient();
    try {
    const review = await prisma.review.update({
        where: { id },
        data: {
            userId, propertyId, rating, comment
        }
      })
    
      if (!review) {
        return null;
      }

    review.userId = userId ?? review.userId;
    review.propertyId = propertyId ?? review.propertyId;
    review.rating = rating ?? review.rating;
    review.comment = comment ?? review.comment;

    return review;
} catch (error) {
    return null;
  } finally {
    await prisma.$disconnect();
  }
};
export default updateReviewById;