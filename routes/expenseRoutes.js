import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

/**
 * POST /api/expenses
 * Add new expense
 */
router.post("/", async (req, res) => {
  try {
    const {
      amount,
      category,
      group,
      subCategory,
      note,
      date
    } = req.body;

    // Validation
    if (!amount || !category || !group || !subCategory) {
      return res.status(400).json({
        message: "Missing required fields"
      });
    }

    const expense = new Expense({
      amount,
      category,
      group,
      subCategory,
      note: note || "",
      date: date || new Date()
    });

    await expense.save();

    res.status(201).json({
      message: "Expense added successfully",
      expense
    });
  } catch (error) {
    console.error("Error adding expense:", error);
    res.status(500).json({
      message: "Failed to add expense"
    });
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
    console.error("Error fetching expenses:", error);
    res.status(500).json({
      message: "Failed to fetch expenses"
    });
  }
});

export default router;
