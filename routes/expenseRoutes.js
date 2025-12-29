import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

/**
 * POST /api/expenses
 * Add new expense
 */
router.post("/", async (req, res) => {
  try {
    const { amount, category, group, subCategory, note, date } = req.body;

    if (!amount || !category || !group || !subCategory) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const expense = new Expense({
      amount,
      category,
      group,
      subCategory,
      note,
      date
    });

    await expense.save();

    res.status(201).json({
      message: "Expense added successfully",
      expense
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * GET /api/expenses
 * Fetch all expenses
 */
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
