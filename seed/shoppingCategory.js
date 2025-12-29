require('dotenv').config();
const mongoose = require('mongoose');
const Category = require('../models/Category');

const shoppingCategory = {
    name: 'Shopping',
    groups: {
        "Clothing & Accessories": [
            "Men's Clothing",
            "Women's Clothing",
            "Children's Clothing",
            "Footwear",
            "Jewelry / Accessories",
            "Bags & Wallets",
            "Belts / Scarves / Socks"
        ],
        "Electronics & Gadgets": [
            "Mobile Phones",
            "Laptop / Desktop",
            "Tablet",
            "Headphones / Earphones",
            "Chargers / Power Bank",
            "TV / Home Appliances",
            "Kitchen Electronics",
            "Smart Home Devices"
        ],
        "Home & Kitchen": [
            "Furniture",
            "Bedding & Linen",
            "Curtains",
            "Cookware / Utensils",
            "Decor Items",
            "Storage & Organizers",
            "Cleaning Tools"
        ],
        "Groceries & Daily Needs": [
            "Supermarket Shopping",
            "Specialty Stores",
            "Online Grocery",
            "Organic Products",
            "Beverages",
            "Snacks"
        ],
        "Books & Stationery": [
            "Books",
            "Notebooks / Diary",
            "Pens / Pencils",
            "Office Stationery",
            "Art & Craft Supplies"
        ],
        "Beauty & Personal Care": [
            "Cosmetics",
            "Skincare",
            "Hair Care Products",
            "Perfume / Deodorant",
            "Salon Products"
        ],
        "Online Shopping": [
            "Amazon",
            "Flipkart",
            "Myntra",
            "Ajio",
            "Other E-commerce"
        ],
        "Miscellaneous Shopping": [
            "Gifts",
            "Party Supplies",
            "Festive Items",
            "Impulse Buy",
            "Other Shopping"
        ]
    }
};

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        await Category.deleteMany({ name: 'Shopping' });
        await Category.create(shoppingCategory);
        console.log('Shopping category seeded successfully');
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
