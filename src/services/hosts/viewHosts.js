import { PrismaClient } from "@prisma/client";

const viewHosts = async () => {
  try {
    const prisma = new PrismaClient();
    const hosts = prisma.host.findMany();
    return hosts;
  } catch (error) {
    return null;
  }
};

export default viewHosts;
