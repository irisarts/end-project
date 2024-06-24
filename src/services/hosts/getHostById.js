import { PrismaClient } from "@prisma/client";

const getHostById = async (id) => {
  try {
    const prisma = new PrismaClient();
    const host = await prisma.host.findUnique({
      where: { id },
    });
    return host;
  } catch (error) {
    throw new Error("Database failed.");
  }
};

export default getHostById;
