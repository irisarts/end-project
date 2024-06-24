import { PrismaClient } from "@prisma/client";

const viewUsers = async () => {
  try {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    return null;
  }
};
export default viewUsers;
