import mongoose from "mongoose";

const cashFlowCategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    subCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const CashFlowCategory = mongoose.model(
  "CashFlowCategory",
  cashFlowCategorySchema
);
