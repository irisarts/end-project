import { PrismaClient } from "@prisma/client";

const viewAmenities = async () => {
  try {
    const prisma = new PrismaClient();
    const amenities = await prisma.amenity.findMany();
    return amenities;
  } catch (error) {
    return null;
  }
};

export default viewAmenities;
