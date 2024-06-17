import { v4 as uuid } from "uuid";
import { PrismaClient } from "@prisma/client/extension";

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
    return await prisma.host.create({
      data: {
        id: uuid(),
        username,
        password,
        name,
        email,
        phoneNumber,
        profilePicture,
        aboutMe,
      },
    });
  } catch (error) {
    return null;
  }
};

export default createHost;
