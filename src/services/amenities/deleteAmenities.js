import { PrismaClient } from "@prisma/client";

const deleteAmenity = async (id) => {
  try {
    const prisma = new PrismaClient();
    const deletedAmenity = await prisma.amenity.deleteMany({
      where: { id },
    });
    return deletedAmenity.count > 0 ? id : null;
  } catch (error) {
    return null;
  }
};

export default deleteAmenity;