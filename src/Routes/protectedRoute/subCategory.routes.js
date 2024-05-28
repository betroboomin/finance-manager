import express from "express";
import { protectRoute } from "../../middleware.js";
import {
  createSubCategories,
  deleteSubCategory,
  getAllSubCategories,
  getSingleSubCategory,
  updateSubCategory,
} from "../../controllers/subCategory.controller.js";

const router = express.Router();

router.get("/", protectRoute, getAllSubCategories);
router.get("/:id", protectRoute, getSingleSubCategory);
router.post("/:categoryId", protectRoute, createSubCategories);
router.patch("/:id", protectRoute, updateSubCategory);
router.delete("/:id", protectRoute, deleteSubCategory);

export default router;
