import { PrismaClient } from "@prisma/client";

const deleteUser = async (id) => {
  console.log("deleteUser: Function called with id:", id);
  try {
    const prisma = new PrismaClient();
    console.log("Attempting to delete user with id:", id);
    const user = await prisma.user.deleteMany({
      where: { id },
    });
    console.log("Delete result:", user);
    return user.count > 0 ? id : null;
  } catch (error) {
    console.error("Error during user deletion:", error);
    return null;
  }
};

export default deleteUser;