import prisma from "../../middleware/client.js";

const getUserById = async (id) => {
    try{
    const user = await prisma.user.findUnique({
        where: { id },
    })
    return user
} catch (error) {
    throw new Error("Database failed.");
}
};

export default getUserById;