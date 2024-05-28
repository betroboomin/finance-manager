import express from "express";
import { protectRoute } from "../../middleware.js";
import {
  createCashFlowCategory,
  deleteCashFlowCategory,
  getAllCashFlowCategory,
  getSingleCashFlowCategory,
  updateCashFlowCategory,
} from "../../controllers/category.controller.js";

const router = express.Router();

router.get("/", protectRoute, getAllCashFlowCategory);
router.get("/:id", protectRoute, getSingleCashFlowCategory);
router.post("/", protectRoute, createCashFlowCategory);
router.patch("/:id", protectRoute, updateCashFlowCategory);
router.delete("/:id", protectRoute, deleteCashFlowCategory);

export default router;
