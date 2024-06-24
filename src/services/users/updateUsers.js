import { PrismaClient } from "@prisma/client";

const updateUserById = async (
  id,
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture
) => {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        username,
        password,
        name,
        email,
        phoneNumber,
        profilePicture,
      },
    });

    if (!user) {
        return null;
      }

    user.username = username ?? user.username;
    user.password = password ?? user.password;
    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.phoneNumber = phoneNumber ?? user.phoneNumber;
    user.profilePicture = profilePicture ?? user.profilePicture;

    return user;
} catch (error) {
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

export default updateUserById;
