const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Save expense
router.post('/', async (req, res) => {
    const { category, subCat, amount } = req.body;

    try {
        const expense = new Expense({ category, subCat, amount });
        await expense.save();
        res.status(201).json(expense);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all expenses
router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find().sort({ createdAt: -1 });
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
