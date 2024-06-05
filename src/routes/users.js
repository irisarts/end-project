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

router.get(
  "/",
  (req, res) => {
    try {
      const users = viewUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },
  notFoundErrorHandler
);

router.get(
  "/:id",
  (req, res) => {
      const { id } = req.params;
      const user = getUserById(id);
      res.status(200).json(user);    
  },
  notFoundErrorHandler
);

router.post(
  "/",
  authMiddleware,
  (req, res) => {
    const { username, password, name, email, phoneNumber, profilePicture } =
      req.body;
    const newUser = createUser(
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    );
    res.status(201).json(newUser);
  },
  errorHandler
);

router.put(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const { username, password, name, email, phoneNumber, profilePicture } =
      req.body;
    const updatedUser = updateUserById(
      id,
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    );
    res.status(200).json(updatedUser);
  },
  notFoundErrorHandler
);

router.delete(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const deletedUserId = deleteUser(id);

    res.status(200).json({
      message: `User with id ${deletedUserId} was deleted`,
    });
  },
  notFoundErrorHandler
);

export default router;
