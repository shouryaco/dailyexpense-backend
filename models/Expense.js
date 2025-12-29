import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    group: {
      type: String, // e.g. "Vegetables", "Street Food"
      required: true
    },

    subCategory: {
      type: String, // e.g. "Potato", "Phuchka"
      required: true
    },

    note: {
      type: String,
      default: ""
    },

    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export default mongoose.model("Expense", expenseSchema);
