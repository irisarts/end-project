import { PrismaClient } from "@prisma/client";

const createHost = async (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture,
  aboutMe
) => {
  try {
  
    const prisma = new PrismaClient();
    const aangemaakteHost = await prisma.host.create({
      data: {
        username,
        password,
        name,
        email,
        phoneNumber,
        profilePicture,
        aboutMe,
      },
    });
    return aangemaakteHost;
  } catch (error) {
    return null;
  }
};

export default createHost;
