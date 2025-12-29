require('dotenv').config();
const mongoose = require('mongoose');
const Category = require('../models/Category');

const familyCategory = {
    name: 'Family, Festivals & Donations',
    groups: {
        "Family Gifts & Expenses": [
            "Birthday Gifts",
            "Anniversary Gifts",
            "Wedding Gifts",
            "Baby Shower Gifts",
            "Other Family Occasions"
        ],
        "Festivals & Religious": [
            "Durga Puja Expenses",
            "Diwali Expenses",
            "Poila Boishakh / Bengali New Year",
            "Kali Puja / Lakshmi Puja",
            "Christmas / Eid / Other Religious Festival",
            "Festival Sweets & Snacks",
            "Puja Decorations & Pooja Items"
        ],
        "Donations & Charity": [
            "Temple Donations",
            "Mosque / Church / Other Religious Donations",
            "NGO / Charity Donations",
            "Community / Local Club Donations",
            "School / College Donation"
        ],
        "Family Travel & Outings": [
            "Family Picnic",
            "Short Trips / Weekend Getaways",
            "Annual Family Vacation",
            "Local Sightseeing / Fun Activities"
        ],
        "Misc Family & Festival": [
            "Miscellaneous Festival Expense",
            "Other Family Event Expense"
        ]
    }
};

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        await Category.deleteMany({ name: 'Family, Festivals & Donations' });
        await Category.create(familyCategory);
        console.log('Family, Festivals & Donations category seeded successfully');
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
