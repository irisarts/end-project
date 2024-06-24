import { PrismaClient } from "@prisma/client";

const updateHostById = async (
  id,
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture,
  aboutMe
) => {
  const prisma = new PrismaClient();
  try {
  const host = await prisma.host.update({
    where: { id },
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

  if (!host) {
    return null;
  }

  host.username = username ?? host.username;
  host.password = password ?? host.password;
  host.name = name ?? host.name;
  host.email = email ?? host.email;
  host.phoneNumber = phoneNumber ?? host.phoneNumber;
  host.profilePicture = profilePicture ?? host.profilePicture;
  host.aboutMe = aboutMe ?? host.aboutMe;

  return host;
} catch (error) {
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

export default updateHostById;
