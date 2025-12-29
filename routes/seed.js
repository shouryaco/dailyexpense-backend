const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

router.post('/categories', async (req, res) => {
  try {
    await Category.deleteMany({});
    await Category.insertMany(req.body);
    res.json({ message: 'Categories seeded successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
