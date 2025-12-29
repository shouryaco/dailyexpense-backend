require('dotenv').config();
const mongoose = require('mongoose');
const Category = require('../models/Category');

const personalHealthCategory = {
    name: 'Personal & Health',
    groups: {
        "Personal Care": [
            "Haircut",
            "Salon / Parlour",
            "Shaving & Grooming",
            "Cosmetics",
            "Skincare Products",
            "Perfume / Deodorant",
            "Sanitary Products"
        ],
        "Health & Medical": [
            "Doctor Consultation",
            "Medicines",
            "Medical Tests",
            "Hospital Charges",
            "Dental Treatment",
            "Eye Check-up",
            "Physiotherapy"
        ],
        "Fitness & Wellness": [
            "Gym Membership",
            "Yoga Classes",
            "Swimming",
            "Fitness Equipment",
            "Health Supplements"
        ],
        "Mental & Emotional Health": [
            "Counselling",
            "Therapy Sessions",
            "Meditation Apps",
            "Stress Relief Programs"
        ],
        "Insurance": [
            "Health Insurance Premium",
            "Mediclaim Renewal",
            "Accidental Insurance"
        ],
        "Elder & Child Care": [
            "Child Doctor Visit",
            "Vaccination",
            "Child Care Products",
            "Elder Care Medicines",
            "Nursing Help"
        ],
        "Misc Personal": [
            "Emergency Medical Expense",
            "Personal Accessories",
            "Other Personal Expense"
        ]
    }
};

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        await Category.deleteMany({ name: 'Personal & Health' });
        await Category.create(personalHealthCategory);
        console.log('Personal & Health category seeded successfully');
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
