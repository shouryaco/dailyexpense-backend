require('dotenv').config();
const mongoose = require('mongoose');
const Category = require('../models/Category');

const householdCategory = {
    name: 'Household',
    groups: {
        "Rent & Maintenance": [
            "House Rent",
            "Society Maintenance",
            "Parking Charges"
        ],
        "Electricity & Water": [
            "Electricity Bill (CESC)",
            "Electricity Bill (WBSEDCL)",
            "Water Bill",
            "Water Tanker Charges"
        ],
        "Cooking & Gas": [
            "LPG Gas Cylinder",
            "PNG Gas",
            "Gas Stove Repair"
        ],
        "Internet & Communication": [
            "Broadband (Jio)",
            "Broadband (Airtel)",
            "Broadband (BSNL)",
            "Mobile Recharge",
            "Landline Bill"
        ],
        "TV & Entertainment": [
            "DTH Recharge",
            "Cable TV",
            "Set-top Box Repair"
        ],
        "Domestic Help": [
            "Maid Charges",
            "Cook Salary",
            "Cleaning Help",
            "Babysitter Charges",
            "Elder Care Help"
        ],
        "Cleaning & Supplies": [
            "Floor Cleaner",
            "Toilet Cleaner",
            "Dishwash Liquid",
            "Laundry Detergent",
            "Phenyl",
            "Broom",
            "Mop",
            "Garbage Bags"
        ],
        "Repairs & Maintenance": [
            "Plumber Charges",
            "Electrician Charges",
            "Carpenter Charges",
            "AC Repair",
            "Fan Repair",
            "Geyser Repair"
        ],
        "Misc Household": [
            "Garbage Collection Fees",
            "Society Donation",
            "Emergency Repair",
            "Other Household Expense"
        ]
    }
};

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        await Category.deleteMany({ name: 'Household' });
        await Category.create(householdCategory);
        console.log('Household category seeded successfully');
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
