require('dotenv').config();
const mongoose = require('mongoose');
const Category = require('../models/Category');

const foodCategory = {
    name: 'Food',
    groups: {
        "Staples & Grains": [
            "Rice (Sada)", "Gobindobhog Rice", "Basmati Rice", "Atop Rice",
            "Parboiled Rice", "Atta", "Maida", "Suji", "Chira", "Muri",
            "Barley", "Oats"
        ],
        "Dal & Pulses": [
            "Masoor Dal", "Moong Dal", "Toor Dal", "Chana Dal",
            "Urad Dal", "Kabuli Chana", "Green Peas (Dry)", "Rajma", "Black Gram"
        ],
        "Cooking Oils & Fats": [
            "Mustard Oil", "Refined Oil", "Soybean Oil",
            "Sunflower Oil", "Coconut Oil", "Ghee", "Butter"
        ],
        "Vegetables": [
            "Potato", "Onion", "Tomato", "Ginger", "Garlic", "Green Chilli",
            "Brinjal", "Pumpkin", "Bottle Gourd", "Ridge Gourd", "Pointed Gourd",
            "Bitter Gourd", "Lady Finger", "Cabbage", "Cauliflower", "Beans",
            "Beetroot", "Carrot", "Radish", "Spinach", "Mustard Greens",
            "Fenugreek Leaves", "Coriander Leaves", "Drumstick", "Raw Banana", "Raw Papaya"
        ],
        "Fruits": [
            "Banana", "Apple", "Orange", "Mango", "Papaya",
            "Pineapple", "Guava", "Grapes", "Pomegranate",
            "Watermelon", "Litchi", "Coconut"
        ],
        "Fish & Seafood": [
            "Rohu", "Katla", "Hilsa", "Bhetki", "Pabda",
            "Tangra", "Pomfret", "Prawns", "Crab", "Dried Fish"
        ],
        "Meat & Eggs": [
            "Chicken", "Country Chicken", "Mutton", "Duck Meat",
            "Hen Eggs", "Duck Eggs", "Quail Eggs"
        ],
        "Milk & Dairy": [
            "Milk", "Curd", "Paneer", "Cheese", "Butter Milk", "Cream"
        ],
        "Spices (Whole)": [
            "Bay Leaf", "Cinnamon", "Green Cardamom", "Black Cardamom",
            "Cloves", "Black Pepper", "Dry Red Chilli", "Nutmeg", "Mace",
            "Star Anise", "Cumin Seeds", "Coriander Seeds", "Fennel Seeds",
            "Fenugreek Seeds", "Mustard Seeds", "Nigella Seeds", "Poppy Seeds"
        ],
        "Spices (Powdered)": [
            "Turmeric Powder", "Red Chilli Powder", "Kashmiri Chilli Powder",
            "Cumin Powder", "Coriander Powder", "Garam Masala",
            "Bengali Garam Masala", "Kitchen King Masala",
            "Meat Masala", "Fish Masala", "Chaat Masala"
        ],
        "Snacks & Ready Items": [
            "Chanachur", "Bhujia", "Biscuits", "Cakes", "Bread",
            "Toast", "Instant Noodles", "Pasta", "Frozen Paratha", "Frozen Momos"
        ],
        "Sweets": [
            "Rasgulla", "Sandesh", "Mishti Doi", "Cham Cham",
            "Pantua", "Ledikeni", "Payesh", "Kheer", "Laddu", "Jalebi"
        ]
    }
};

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        await Category.deleteMany({ name: 'Food' });
        await Category.create(foodCategory);
        console.log('Food category seeded successfully');
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
