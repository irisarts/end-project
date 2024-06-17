import { v4 as uuid } from "uuid";
import { PrismaClient } from "@prisma/client/extension";

const createAmenity = async (name) => {
  try {
    const prisma = new PrismaClient();
    return await prisma.amenity.create({
      data: {
        id: uuid(),
        name,
      },
    });
  } catch (error) {
    return null;
  }
};

export default createAmenity;
