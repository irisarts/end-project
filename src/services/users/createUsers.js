import { PrismaClient } from "@prisma/client";

const createUser = async (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture
) => {
  try {
    const prisma = new PrismaClient();
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
        name,
        email,
        phoneNumber,
        profilePicture,
      },
    });
    return newUser;
  } catch (error) {
    return null;
  }
};

export default createUser;
