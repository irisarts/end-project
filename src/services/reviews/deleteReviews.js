import { PrismaClient } from "@prisma/client";

const deleteReview = async (id) => {
  try {
    const prisma = new PrismaClient();
    const review = await prisma.review.deleteMany({
      where: { id },
    });
    return review.count ? id : null;
  } catch (error) {
    return null;
  }
};

export default deleteReview;
