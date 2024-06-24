import { PrismaClient } from "@prisma/client";

const getPropertyById = async (id) => {
  try {
    const prisma = new PrismaClient();
    const property = await prisma.property.findUnique({
      where: { id },
    });
    return property;
  } catch (error) {
    throw new Error("Database failed.");
  }
};

export default getPropertyById;
