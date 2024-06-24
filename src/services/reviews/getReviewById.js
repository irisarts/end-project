import { PrismaClient } from "@prisma/client";

const getReviewById = async (id) => {
  try {
    const prisma = new PrismaClient();
    const review = await prisma.review.findUnique({
      where: { id },
    });
    return review;
  } catch (error) {
    throw new Error("Database failed.");
  }
};

export default getReviewById;
