import { PrismaClient } from "@prisma/client";

const viewProperties = async (hostId, location, pricePerNight) => {
  try {
    const prisma = new PrismaClient();
    let properties = await prisma.property.findMany();

    if (hostId) {
      properties = properties.filter((property) => property.hostId === hostId);
    }

    if (location) {
      properties = properties.filter(
        (property) => property.location === location
      );
    }

    if (pricePerNight) {
      properties = properties.filter(
        (property) => Number(property.pricePerNight) === Number(pricePerNight)
      );
    }
    return properties;
  } catch (error) {
    return null;
  }
};

export default viewProperties;
