require('dotenv').config();
const mongoose = require('mongoose');
const Category = require('../models/Category');

const billsCategory = {
    name: 'Bills & Subscriptions',
    groups: {
        "Utility Bills": [
            "Electricity Bill",
            "Water Bill",
            "Gas Bill (LPG/PNG)",
            "Internet / Broadband Bill",
            "Mobile Postpaid Bill",
            "Landline Bill",
            "DTH / Cable Bill"
        ],
        "Financial Subscriptions": [
            "Bank EMI",
            "Credit Card EMI",
            "Loan Repayment",
            "Insurance Premium (Health / Life / Vehicle)",
            "Mutual Fund SIP"
        ],
        "Entertainment & Media": [
            "Netflix Subscription",
            "Amazon Prime",
            "Disney+ Hotstar",
            "Spotify / Gaana / JioSaavn",
            "Magazine / Newspaper Subscription",
            "Other OTT Services"
        ],
        "Software & Apps": [
            "Adobe Subscription",
            "Microsoft Office 365",
            "Cloud Storage (Google Drive / OneDrive)",
            "Other Paid Apps"
        ],
        "Membership & Clubs": [
            "Gym Membership",
            "Yoga / Dance / Fitness Classes",
            "Club Memberships",
            "Professional Memberships"
        ],
        "Miscellaneous Subscriptions": [
            "Charity Donations",
            "Recurring Service Payments",
            "Other Subscriptions"
        ]
    }
};

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        await Category.deleteMany({ name: 'Bills & Subscriptions' });
        await Category.create(billsCategory);
        console.log('Bills & Subscriptions category seeded successfully');
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
