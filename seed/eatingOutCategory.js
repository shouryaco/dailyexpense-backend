require('dotenv').config();
const mongoose = require('mongoose');
const Category = require('../models/Category');

const eatingOutCategory = {
    name: 'Eating Out & Outside Food',
    groups: {
        "Street Food": [
            "Phuchka / Pani Puri",
            "Jhal Muri",
            "Ghugni",
            "Egg Roll",
            "Chicken Roll",
            "Chowmein",
            "Momos",
            "Telebhaja",
            "Singara / Samosa",
            "Cutlet"
        ],
        "Restaurants & Cafes": [
            "Restaurant Dining",
            "Cafe Coffee",
            "Bakery Items",
            "Fast Food Outlet",
            "Fine Dining"
        ],
        "Online Food Delivery": [
            "Swiggy Order",
            "Zomato Order",
            "Cloud Kitchen",
            "Late Night Order"
        ],
        "Office & Work Food": [
            "Office Lunch",
            "Office Snacks",
            "Team Lunch",
            "Client Treat"
        ],
        "Travel & Outside Food": [
            "Highway Dhaba",
            "Train Food",
            "Bus Stand Food",
            "Airport Food"
        ],
        "Events & Occasions": [
            "Birthday Treat",
            "Anniversary Dinner",
            "Festival Food Outside",
            "Party Catering"
        ],
        "Beverages Outside": [
            "Tea Outside",
            "Coffee Outside",
            "Cold Drinks",
            "Fresh Juice",
            "Lassi",
            "Sugarcane Juice"
        ],
        "Misc Outside Food": [
            "Impulse Food Buy",
            "Midnight Snacks",
            "Other Outside Food"
        ]
    }
};

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        await Category.deleteMany({ name: 'Eating Out & Outside Food' });
        await Category.create(eatingOutCategory);
        console.log('Eating Out & Outside Food category seeded successfully');
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
