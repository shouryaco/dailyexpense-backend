const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    group: { type: String, required: true },
    item: { type: String, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Expense', expenseSchema);
