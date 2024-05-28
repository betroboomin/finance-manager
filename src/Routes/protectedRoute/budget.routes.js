import express from "express";
import {
  createBudget,
  deleteBudget,
  getAllBudget,
  getSingleBudget,
  updateBudget,
} from "../../controllers/budget.controller.js";
import { protectRoute } from "../../middleware.js";

const router = express.Router();

router.get("/", protectRoute, getAllBudget);
router.get("/:id", protectRoute, getSingleBudget);
router.post("/", protectRoute, createBudget);
router.delete("/:id", protectRoute, deleteBudget);
router.patch("/:id", protectRoute, updateBudget);

export default router;
