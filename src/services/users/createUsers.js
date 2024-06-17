import userData from "../../data/users.json" assert { type: "json" };
import { v4 as uuid } from "uuid";
// import prisma from "../../middleware/client.js";

const createUser = (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture
) => {
  try {
    const newUser = {
      id: uuid(),
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
    };

      if (!username) {
        throw new Error(`Username was not defined`);
    }
    userData.users.push(newUser);
    return newUser;
  } catch (error) {
    return null;
  }
};

export default createUser;
