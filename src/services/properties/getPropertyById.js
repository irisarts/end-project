import prisma from "../../middleware/client.js";

const getPropertyById = async (id) => {
  try {
    const property = await prisma.property.findUnique({
      where: { id },
    });
    return property;
  } catch (error) {
    throw new Error("Database failed.");
  }
};

export default getPropertyById;
