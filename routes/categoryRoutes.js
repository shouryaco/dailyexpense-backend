const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// GET all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST category (admin / seed)
router.post('/', async (req, res) => {
    const { name, subCategories } = req.body;

    try {
        const category = new Category({ name, subCategories });
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
