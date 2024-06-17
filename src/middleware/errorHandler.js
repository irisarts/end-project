// import prisma from "./client.js";

const errorHandler = (err, res) => {
  console.error(err);
  res.status(500).json({
    message:
      "Er ging iets fout",
  });
};

export default errorHandler;


