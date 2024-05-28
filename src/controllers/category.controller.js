import { CashFlowCategory } from "../models/cashFlowCategory.model.js";

export const getAllCashFlowCategory = async (req, res) => {
  try {
    const result = await CashFlowCategory.find();
    if (!result) {
      return res.status(404).json({ message: "sub cartegories not found" });
    }
    return res.status(200).json({
      message: " All categories retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log("error at the level of getting all CashFlowCategory", error);
    res.status(500).send(error);
  }
};

export const getSingleCashFlowCategory = async (req, res) => {
  try {
    const result = await CashFlowCategory.findById(req.params.id).populate(
      `subCategories`
    );
    if (!result) {
      return res.status(404).json({ message: "CashFlowCategory not found" });
    }
    return res.status(200).json({
      message: "CashFlowCategory retrieved",
      data: result,
    });
  } catch (error) {
    console.log("error at the level of getSingleCashFlowCategory", error);
    res.status(500).send(error);
  }
};

export const updateCashFlowCategory = async (req, res) => {
  try {
    const result = await CashFlowCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!result) {
      return res.status(404).json({
        message: `CashFlowCategory not found`,
      });
    }
    return res.status(200).json({
      message: `CashFlowCategory updated successfully`,
      data: result,
    });
  } catch (error) {
    console.log("error at the level of updateCashFlowCategory", error);
    res.status(500).send(error);
  }
};

export const deleteCashFlowCategory = async (req, res) => {
  try {
    const deletedData = await CashFlowCategory.findByIdAndDelete(req.params.id);
    if (!deletedData) {
      return res.status(404).json({
        message: "CashFlowCategory not found",
      });
    }
    return res.status(200).json({
      message: "CashFlowCategory deleted successfuly",
      data: deletedData,
    });
  } catch (error) {
    console.log("error at the level of deleteCashFlowCategory", error);
    res.status(500).send(error);
  }
};

export const createCashFlowCategory = async (req, res) => {
  try {
    console.log(req.body);
    const newBody = new CashFlowCategory({ ...req.body });
    const savedData = await newBody.save();
    return res.status(200).json({
      message: `CashFlowCategory created`,
      data: savedData,
    });
  } catch (error) {
    console.log("error at the level of createCashFlowCategory", error);
    res.status(500).json({ error });
  }
};
