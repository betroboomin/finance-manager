import mongoose from "mongoose";

const budgetSchema = mongoose.Schema(
  {
    month: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const BudgetSchema = mongoose.model("Budget", budgetSchema);
