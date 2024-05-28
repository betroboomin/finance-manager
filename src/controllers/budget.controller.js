import { BudgetSchema } from "../models/budget.nodel.js";

export const createBudget = async (req, res) => {
  try {
    const newBudjet = new BudgetSchema(req.body);
    const savedBudget = await newBudjet.save();

    return res.status(200).send(savedBudget);
  } catch (error) {
    console.log("error at the level of creating budget", error);
    res.status(500).send(error);
  }
};

export const getSingleBudget = async (req, res) => {
  try {
    const id = req.params.id;

    const findBudget = await BudgetSchema.findById(id);

    if (!findBudget) {
      return res.status(404).json({ message: "budget not found" });
    }
    return res.status(200).json({
      message: "single budget retrieved successfully",
      data: findBudget,
    });
  } catch (error) {
    console.log("error at the level of gettingSingle budget", error);
    res.status(500).send(error);
  }
};

export const getAllBudget = async (req, res) => {
  try {
    const allBudget = await BudgetSchema.find();

    if (!allBudget || (allBudget && Object.keys(allBudget).length === 0)) {
      const message = "no budget found";
      console.log(message);
      return res.status(404).json({ message });
    }
    return res.status(200).json({
      message: "all budget retreived successfully",
      data: allBudget,
    });
  } catch (error) {
    console.log("error at the level of getting all budget", error);
    res.status(500).send(error);
  }
};

export const deleteBudget = async (req, res) => {
  try {
    const deleteBudget = await BudgetSchema.findByIdAndDelete(req.params.id);
    if (!deleteBudget) {
      return res.status(404).json({ message: "budget not found" });
    }
    return res.status(200).json({
      message: "status deleted successfully",
      data: deleteBudget,
    });
  } catch (error) {
    console.log("error at the level of deleting  budget", error);
    res.status(500).send(error);
  }
};

export const updateBudget = async (req, res) => {
  try {
    const updatedBudget = await BudgetSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBudget) {
      return res.status(404).json({ message: "budget not found" });
    }
    return res.status(200).json({
      message: "status updated successfully",
      data: updatedBudget,
    });
  } catch (error) {
    console.log("error at the level of updating  budget", error);
    res.status(500).send(error);
  }
};
