import { PrismaClient } from "@prisma/client";

const createAmenity = async (name) => {
  try {
    const prisma = new PrismaClient();
    return await prisma.amenity.create({
      data: {
        name,
      },
    });
  } catch (error) {
    return null;
  }
};

export default createAmenity;
