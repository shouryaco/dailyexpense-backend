const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');



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

// DELETE expense
router.delete("/:id", async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete expense" });
  }
});

// UPDATE expense
router.put("/:id", async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.json(updatedExpense);
  } catch (error) {
    res.status(500).json({ message: "Failed to update expense" });
  }
});

module.exports = router;
