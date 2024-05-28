import mongoose from "mongoose";

const subCategory = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CashFlowCategory",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SubCategory = mongoose.model("SubCategory", subCategory);
