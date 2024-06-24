import express from "express";
import viewUsers from "../services/users/viewUsers.js";
import getUserById from "../services/users/getUserById.js";
import deleteUser from "../services/users/deleteUser.js";
import createUser from "../services/users/createUsers.js";
import updateUserById from "../services/users/updateUsers.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import authMiddleware from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await viewUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);

    if (!user) {
      res.status(404).json(user);
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  const { username, password, name, email, phoneNumber, profilePicture } =
    req.body;
  try {
    const newUser = await createUser(
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    );
    if (!newUser) {
      res.status(400).json(newUser);
    } else {
      res.status(201).json(newUser);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const { username, password, name, email, phoneNumber, profilePicture } =
    req.body;
  try {
    const updatedUser = await updateUserById(
      id,
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    );
    if (!updatedUser) {
      res.status(404).json(updatedUser);
    } else {
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  console.log("Received request to delete user with ID:", id);
  try {
    const deletedUserId = await deleteUser(id);
    console.log("deleteUser result:", deletedUserId);
    if (deletedUserId) {
      console.log(`User with id ${id} successfully deleted`);
      res.status(200).send({
        message: `User with id ${id} successfully deleted`,
      });
    } else {
      console.log(`User with id ${id} not found`);
      res.status(404).json({
        message: `User with id ${id} not found`,
      });
    }
  } catch (error) {
    console.error("Error during deletion:", error);
    if (error.message.includes("not found")) {
      res.status(404).json({ message: error.message });
    } else {
      next(error);
    }
  }
});

router.use(notFoundErrorHandler);
router.use(errorHandler);

export default router;
