import { CashFlowCategory } from "../models/cashFlowCategory.model.js";
import { SubCategory } from "../models/subCategory.model.js";

export const getAllSubCategories = async (req, res) => {
  try {
    const allSubCategories = await SubCategory.find();
    if (!allSubCategories) {
      return res.status(404).json({ message: "sub cartegories not found" });
    }
    return res.status(200).json({
      message: "sub categories retrieved successfully",
      data: allSubCategories,
    });
  } catch (error) {
    console.log("error at the level of getting all allSubCategories", error);
    res.status(500).send(error);
  }
};

export const getSingleSubCategory = async (req, res) => {
  try {
    const singleSubCat = await SubCategory.findById(req.params.id);
    if (!singleSubCat) {
      return res.status(404).json({ message: "subcategory not found" });
    }
    return res.status(200).json({
      message: "sub category retrieved",
      data: singleSubCat,
    });
  } catch (error) {
    console.log("error at the level of getSingleSubCategory", error);
    res.status(500).send(error);
  }
};

export const updateSubCategory = async (req, res) => {
  try {
    const result = await SubCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!result) {
      return res.status(404).json({
        message: `sub category not found`,
      });
    }
    return res.status(200).json({
      message: `sub category updated successfully`,
      data: result,
    });
  } catch (error) {
    console.log("error at the level of updateSubCategory", error);
    res.status(500).send(error);
  }
};

export const deleteSubCategory = async (req, res) => {
  try {
    const deletedData = await SubCategory.findByIdAndDelete(req.params.id);
    if (!deletedData) {
      return res.status(404).json({
        message: "sub category not found",
      });
    }
    return res.status(200).json({
      message: "SubCategory deleted successfuly",
      data: deletedData,
    });
  } catch (error) {
    console.log("error at the level of deleteSubCategory", error);
    res.status(500).send(error);
  }
};

export const createSubCategories = async (req, res) => {
  try {
    const category = req.params.categoryId;

    const categoryData = await CashFlowCategory.findById(category);

    if (!category || !categoryData) {
      return res.status(400).json({ message: "provide category id" });
    }
    const newBody = new SubCategory({ ...req.body, category });
    const savedData = await newBody.save();
    categoryData.subCategories.push(savedData?._id);
    await categoryData.save();
    return res.status(200).json({
      message: `sub category created`,
      data: savedData,
    });
  } catch (error) {
    console.log("error at the level of createSubCategories", error);
    res.status(500).send(error);
  }
};
