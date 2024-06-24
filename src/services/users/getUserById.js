import { PrismaClient } from "@prisma/client";

const getUserById = async (id) => {
  try {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    throw new Error("Database failed.");
  }
};

export default getUserById;
