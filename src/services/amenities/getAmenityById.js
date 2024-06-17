import prisma from "../../middleware/client.js";

const getAmenityById = async (id) => {
    try {
    const amenity = await prisma.amenity.findUnique({
        where: { id },
    })

    return amenity
} catch (error) {
    throw new Error("Database failed.");
}
};
export default getAmenityById;