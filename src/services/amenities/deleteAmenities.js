import { PrismaClient } from "@prisma/client/extension";

const deleteAmenity = async (id) => {
  try {
    const prisma = new PrismaClient();
    const deletedAmenity = await prisma.amenity.delete({
      where: { id },
    });
    return deletedAmenity.id;
  } catch (error) {
    return null;
  }
};

export default deleteAmenity;