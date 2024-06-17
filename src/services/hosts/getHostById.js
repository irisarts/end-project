import prisma from "../../middleware/client.js";

const getHostById = async (id) => {
    try {
    const host = await prisma.host.findUnique({
        where: { id },
    })
    return host
} catch (error) {
    throw new Error("Database failed.");
}};

export default getHostById;