import express from "express";
import viewHosts from "../services/hosts/viewHosts.js";
import getHostById from "../services/hosts/getHostById.js";
import createHost from "../services/hosts/createHosts.js";
import updateHostById from "../services/hosts/updateHosts.js";
import deleteHost from "../services/hosts/deleteHosts.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import authMiddleware from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const hosts = await viewHosts();
    res.status(200).json(hosts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const host = await getHostById(id);

    if (!host) {
      res.status(404).json(host);
    } else {
      res.status(200).json(host);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  console.log("we komen in de router post!!");
  const {
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture,
    aboutMe,
  } = req.body;
  try {
    const newHost = await createHost(
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    );
    console.log("newHost in hosts.js:", newHost);
    if (!newHost) {
      res.status(400).json(newHost);
    } else {
      res.status(201).json(newHost);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const {
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture,
    aboutMe,
  } = req.body;
  try {
    const updatedHost = await updateHostById(
      id,
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    );
    if (!updatedHost) {
      res.status(404).json(updatedHost);
    } else {
      res.status(200).json(updatedHost);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  console.log("Route handler: Received request to delete host with ID:", id);
  try {
    console.log("try statement router delete HOST", id);
    const deletedHostId = await deleteHost(id);

    if (deletedHostId) {
      console.log("200 statement router delete HOST", deletedHostId);
      res.status(200).send({
        message: `Host with id ${deletedHostId} was deleted`,
      });
    } else {
      console.log("404 statement router delete HOST", deletedHostId);
      res.status(404).json({
        message: `Host with id ${id} was not found`,
      });
    }
  } catch (error) {
    console.log("catch statement router delete HOST", error);
    next(error);
  }
});

router.use(notFoundErrorHandler);
router.use(errorHandler);
export default router;
