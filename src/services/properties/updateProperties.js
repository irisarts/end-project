import { PrismaClient } from "@prisma/client";

const updatePropertyById = async (
  id,
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
  const prisma = new PrismaClient();
  try {
  const property = await prisma.property.update({
    where: { id },
    data: {
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

  if (!property) {
    return null;
  }

  property.title = title ?? property.title;
  property.description = description ?? property.description;
  property.location = location ?? property.location;
  property.pricePerNight = pricePerNight ?? property.pricePerNight;
  property.bedroomCount = bedroomCount ?? property.bedroomCount;
  property.bathRoomCount = bathRoomCount ?? property.bathRoomCount;
  property.maxGuestCount = maxGuestCount ?? property.maxGuestCount;
  property.hostId = hostId ?? property.hostId;
  property.rating = rating ?? property.rating;

  return property;
} catch (error) {
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

export default updatePropertyById;
