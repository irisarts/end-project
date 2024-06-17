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

router.get(
  "/",
  (req, res) => {
    try {
      const hosts = viewHosts();
      res.status(200).json(hosts);
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
      const host = getHostById(id);
      res.status(200).json(host);
  },
  notFoundErrorHandler
);

router.post(
  "/",
  authMiddleware,
  async(req, res, next) => {
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
    if (!newHost) {
      res.status(400).json(newHost)
  } else {
    res.status(201).json(newHost)
  }} catch (error) {
    next(error);
  }}
);

router.put(
  "/:id",
  authMiddleware,
  (req, res) => {
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
    const updatedHost = updateHostById(
      id,
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    );
    res.status(200).json(updatedHost);
  },
  notFoundErrorHandler
);

router.delete(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const deletedHostId = deleteHost(id);
    res.status(200).json({
      message: `Host with id ${deletedHostId} was deleted`,
    });
  },
  notFoundErrorHandler
);


router.use(errorHandler);
export default router;
