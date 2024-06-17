import { v4 as uuid } from "uuid";
import { PrismaClient } from "@prisma/client";

const createProperty = async (
  title,
  description,
  location,
  pricePerNight,
  bedroomCount,
  bathRoomCount,
  maxGuestCount,
  hostId,
  rating
) => {
  try {
    const prisma = new PrismaClient();
    return await prisma.property.create({
      data: {
        id: uuid(),
        title,
        description,
        location,
        pricePerNight,
        bedroomCount,
        bathRoomCount,
        maxGuestCount,
        hostId,
        rating,
      },
    });
  } catch (error) {
    return null;
  }
};

export default createProperty;
