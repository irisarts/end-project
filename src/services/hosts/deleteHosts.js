// import { PrismaClient } from "@prisma/client";

// const deleteHost = async (id) => {
//   console.log("deleteHost: Function called with id:", id);
//   try {
//     const prisma = new PrismaClient();
//     console.log("Attempting to delete host with id:", id);
//     const host = await prisma.host.deleteMany({
//       where: { id },
//     });
//     if (!host) {
//       console.log("Host not found:", id);
//       return null;
//     }
//     return host.count ? id : null;
//   } catch (error) {
//     console.error("Error during host deletion:", error);
//     return null;
//   }
// };

// export default deleteHost;


import { PrismaClient } from "@prisma/client";

const deleteHost = async (id) => {
  const prisma = new PrismaClient();
  try {
    console.log("Attempting to delete host with id:", id);
    const host = await prisma.host.delete({
      where: { id },
    });
    return host ? id : null;
  } catch (error) {
    console.error("Error during host deletion:", error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

export default deleteHost;

