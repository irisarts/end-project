import { PrismaClient } from "@prisma/client";

const deleteProperties = async (id) => {
  try {
    const prisma = new PrismaClient();
    const property = await prisma.property.delete({
      where: { id },
    });
    return property ? id : null;
  } catch (error) {
    console.error(`Error deleting property:`, error);
    return null;
  }
};

export default deleteProperties;
