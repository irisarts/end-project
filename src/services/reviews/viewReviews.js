import { PrismaClient } from "@prisma/client";

const viewReviews = async () => {
  try {
    const prisma = new PrismaClient();
    const reviews = prisma.review.findMany();
    return reviews;
  } catch (error) {
    return null;
  }
};

export default viewReviews;
