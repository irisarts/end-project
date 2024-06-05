import propertyData from "../../data/properties.json" assert { type: "json" };
import { v4 as uuid } from "uuid";

const createProperty = (
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
  const newProperty = {
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
  };

  if (!title) {
    throw new Error(`title was not defined`);
}

  propertyData.properties.push(newProperty)
  return newProperty;
};

export default createProperty;