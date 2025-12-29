require('dotenv').config();
const mongoose = require('mongoose');
const Category = require('../models/Category');

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('MongoDB Connected');

        await Category.deleteMany({ name: 'Household' });

        await Category.create({
            name: 'Household',
            subCategories: [
                'Rent',
                'Electricity Bill (CESC)',
                'Water Bill',
                'Gas Cylinder (LPG)',
                'Internet (Jio / Airtel / BSNL)',
                'Mobile Recharge',
                'DTH / Cable',
                'Maintenance / Society Charges',
                'Maid Charges',
                'House Cleaning',
                'Repair & Plumbing',
                'Garbage / Misc Charges'
            ]
        });

        console.log('Household category seeded');
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
