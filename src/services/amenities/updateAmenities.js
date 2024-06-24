import { PrismaClient } from "@prisma/client";

const updateAmenityById = async (id, name) => {
    const prisma = new PrismaClient();
    try {
    const amenity = await prisma.amenity.update({
        where: { id },
        data: {
            name
        }
      })
    
      if (!amenity) {
        return null;
      }

    amenity.name = name ?? amenity.name;

    return amenity;
} catch (error) {
    return null;
  } finally {
    await prisma.$disconnect();
  }
};
export default updateAmenityById;