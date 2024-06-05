import hostData from "../../data/hosts.json" assert { type: "json" };
import { v4 as uuid } from "uuid";

const createHost = (
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture,
  aboutMe
) => {
  const newHost = {
    id: uuid(),
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture,
    aboutMe,
  };

  if (!username) {
    throw new Error(`Username was not defined`);
}

  hostData.hosts.push(newHost)
  return newHost;
};

export default createHost;