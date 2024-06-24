import { PrismaClient } from "@prisma/client";

const getAmenityById = async (id) => {
  try {
    const prisma = new PrismaClient();
    const amenity = await prisma.amenity.findUnique({
      where: { id },
    });

    return amenity;
  } catch (error) {
    throw new Error("Database failed.");
  }
};
export default getAmenityById;
