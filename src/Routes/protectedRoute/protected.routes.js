import express from "express";
import { getAllUser } from "../../controllers/user.controller.js";
import { protectRoute } from "../../middleware.js";

const router = express.Router();

router.get("/", protectRoute, getAllUser);

export default router;
