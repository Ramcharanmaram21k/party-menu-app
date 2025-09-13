// Comprehensive restaurant menu mock data with 50+ dishes
export const dishes = [
    // STARTERS - VEG
    {
        "id": 1,
        "name": "Paneer Tikka",
        "description": "Marinated cottage cheese cubes grilled to perfection with bell peppers and onions.",
        "image": "https://placehold.co/300x200/E8F5E8/2D5A2D?text=Paneer+Tikka",
        "mealType": "STARTER",
        "type": "VEG",
        "ingredients": [
            { "name": "Paneer", "quantity": "250g" },
            { "name": "Bell Peppers", "quantity": "1 cup" },
            { "name": "Onion", "quantity": "1 large" },
            { "name": "Yogurt", "quantity": "1/2 cup" },
            { "name": "Spices", "quantity": "as needed" }
        ]
    },
    {
        "id": 2,
        "name": "Vegetable Spring Rolls",
        "description": "Crispy rolls stuffed with fresh vegetables and served with sweet chili sauce.",
        "image": "https://placehold.co/300x200/F0E68C/8B4513?text=Spring+Rolls",
        "mealType": "STARTER",
        "type": "VEG",
        "ingredients": [
            { "name": "Cabbage", "quantity": "1 cup" },
            { "name": "Carrots", "quantity": "1/2 cup" },
            { "name": "Spring Roll Sheets", "quantity": "10 pieces" },
            { "name": "Soy Sauce", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 3,
        "name": "Aloo Tikki",
        "description": "Crispy potato patties served with mint and tamarind chutney.",
        "image": "https://placehold.co/300x200/DEB887/8B4513?text=Aloo+Tikki",
        "mealType": "STARTER",
        "type": "VEG",
        "ingredients": [
            { "name": "Potatoes", "quantity": "4 large" },
            { "name": "Green Peas", "quantity": "1/2 cup" },
            { "name": "Breadcrumbs", "quantity": "1/4 cup" },
            { "name": "Spices", "quantity": "as needed" }
        ]
    },
    {
        "id": 4,
        "name": "Stuffed Mushrooms",
        "description": "Button mushrooms stuffed with cheese and herbs, baked to perfection.",
        "image": "https://placehold.co/300x200/F5DEB3/654321?text=Stuffed+Mushrooms",
        "mealType": "STARTER",
        "type": "VEG",
        "ingredients": [
            { "name": "Button Mushrooms", "quantity": "8 large" },
            { "name": "Cheese", "quantity": "100g" },
            { "name": "Herbs", "quantity": "2 tbsp" },
            { "name": "Garlic", "quantity": "3 cloves" }
        ]
    },

    // STARTERS - NON-VEG
    {
        "id": 5,
        "name": "Chicken Tikka",
        "description": "Tender chicken pieces marinated in yogurt and spices, grilled to perfection.",
        "image": "https://placehold.co/300x200/FFE4E1/8B0000?text=Chicken+Tikka",
        "mealType": "STARTER",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Chicken", "quantity": "500g" },
            { "name": "Yogurt", "quantity": "1/2 cup" },
            { "name": "Ginger-Garlic Paste", "quantity": "2 tbsp" },
            { "name": "Red Chili Powder", "quantity": "1 tsp" }
        ]
    },
    {
        "id": 6,
        "name": "Fish Fingers",
        "description": "Crispy battered fish strips served with tartar sauce.",
        "image": "https://placehold.co/300x200/F0F8FF/4682B4?text=Fish+Fingers",
        "mealType": "STARTER",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Fish Fillets", "quantity": "400g" },
            { "name": "Breadcrumbs", "quantity": "1 cup" },
            { "name": "Eggs", "quantity": "2" },
            { "name": "Flour", "quantity": "1/2 cup" }
        ]
    },
    {
        "id": 7,
        "name": "Mutton Seekh Kebab",
        "description": "Spiced minced mutton grilled on skewers with aromatic herbs.",
        "image": "https://placehold.co/300x200/DDD/8B4513?text=Seekh+Kebab",
        "mealType": "STARTER",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Minced Mutton", "quantity": "500g" },
            { "name": "Onions", "quantity": "2 medium" },
            { "name": "Green Chilies", "quantity": "4" },
            { "name": "Fresh Herbs", "quantity": "1/4 cup" }
        ]
    },

    // MAIN COURSE - VEG
    {
        "id": 8,
        "name": "Kadhai Paneer",
        "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
        "image": "https://placehold.co/300x200/F7D0B3/422402?text=Kadhai+Paneer",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Paneer", "quantity": "200g" },
            { "name": "Onion", "quantity": "2 large" },
            { "name": "Capsicum", "quantity": "1 large" },
            { "name": "Tomato Puree", "quantity": "1 cup" }
        ]
    },
    {
        "id": 9,
        "name": "Dal Makhani",
        "description": "Rich and creamy black lentils slow-cooked with butter and cream.",
        "image": "https://placehold.co/300x200/8B4513/FFFFE0?text=Dal+Makhani",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Black Lentils", "quantity": "1 cup" },
            { "name": "Butter", "quantity": "4 tbsp" },
            { "name": "Cream", "quantity": "1/4 cup" },
            { "name": "Tomatoes", "quantity": "2 large" }
        ]
    },
    {
        "id": 10,
        "name": "Palak Paneer",
        "description": "Cottage cheese cubes in a rich spinach gravy with aromatic spices.",
        "image": "https://placehold.co/300x200/90EE90/006400?text=Palak+Paneer",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Spinach", "quantity": "500g" },
            { "name": "Paneer", "quantity": "200g" },
            { "name": "Onions", "quantity": "2 medium" },
            { "name": "Garlic", "quantity": "6 cloves" }
        ]
    },
    {
        "id": 11,
        "name": "Chole Bhature",
        "description": "Spicy chickpea curry served with fluffy deep-fried bread.",
        "image": "https://placehold.co/300x200/FFEAA7/D63031?text=Chole+Bhature",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Chickpeas", "quantity": "2 cups" },
            { "name": "Flour", "quantity": "2 cups" },
            { "name": "Yogurt", "quantity": "1/4 cup" },
            { "name": "Onions", "quantity": "2 large" }
        ]
    },
    {
        "id": 12,
        "name": "Malai Kofta",
        "description": "Deep-fried cottage cheese and potato balls in rich creamy gravy.",
        "image": "https://placehold.co/300x200/FFF8DC/8B4513?text=Malai+Kofta",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Paneer", "quantity": "200g" },
            { "name": "Potatoes", "quantity": "2 large" },
            { "name": "Cashews", "quantity": "1/2 cup" },
            { "name": "Cream", "quantity": "1/4 cup" }
        ]
    },
    {
        "id": 13,
        "name": "Rajma Rice",
        "description": "Red kidney beans curry served with steamed basmati rice.",
        "image": "https://placehold.co/300x200/CD853F/8B0000?text=Rajma+Rice",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Red Kidney Beans", "quantity": "2 cups" },
            { "name": "Basmati Rice", "quantity": "1.5 cups" },
            { "name": "Onions", "quantity": "2 medium" },
            { "name": "Tomatoes", "quantity": "3 medium" }
        ]
    },

    // MAIN COURSE - NON-VEG
    {
        "id": 14,
        "name": "Butter Chicken",
        "description": "Tender chicken in rich tomato and cream based gravy with aromatic spices.",
        "image": "https://placehold.co/300x200/FFB6C1/8B0000?text=Butter+Chicken",
        "mealType": "MAIN COURSE",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Chicken", "quantity": "500g" },
            { "name": "Butter", "quantity": "4 tbsp" },
            { "name": "Tomato Puree", "quantity": "1 cup" },
            { "name": "Heavy Cream", "quantity": "1/2 cup" }
        ]
    },
    {
        "id": 15,
        "name": "Chicken Biryani",
        "description": "Fragrant basmati rice cooked with marinated chicken and aromatic spices.",
        "image": "https://placehold.co/300x200/F4A460/8B4513?text=Chicken+Biryani",
        "mealType": "MAIN COURSE",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Chicken", "quantity": "750g" },
            { "name": "Basmati Rice", "quantity": "2 cups" },
            { "name": "Saffron", "quantity": "1 pinch" },
            { "name": "Fried Onions", "quantity": "1/2 cup" }
        ]
    },
    {
        "id": 16,
        "name": "Fish Curry",
        "description": "Fresh fish cooked in coconut milk with traditional South Indian spices.",
        "image": "https://placehold.co/300x200/E0FFFF/008B8B?text=Fish+Curry",
        "mealType": "MAIN COURSE",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Fish", "quantity": "500g" },
            { "name": "Coconut Milk", "quantity": "1 cup" },
            { "name": "Curry Leaves", "quantity": "15-20" },
            { "name": "Tamarind", "quantity": "1 tbsp" }
        ]
    },
    {
        "id": 17,
        "name": "Mutton Rogan Josh",
        "description": "Aromatic mutton curry with Kashmiri spices in rich yogurt-based gravy.",
        "image": "https://placehold.co/300x200/CD5C5C/8B0000?text=Mutton+Rogan+Josh",
        "mealType": "MAIN COURSE",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Mutton", "quantity": "750g" },
            { "name": "Yogurt", "quantity": "1 cup" },
            { "name": "Kashmiri Red Chili", "quantity": "2 tbsp" },
            { "name": "Whole Spices", "quantity": "as needed" }
        ]
    },
    {
        "id": 18,
        "name": "Prawn Masala",
        "description": "Succulent prawns cooked in spicy onion and tomato gravy.",
        "image": "https://placehold.co/300x200/FFA07A/FF4500?text=Prawn+Masala",
        "mealType": "MAIN COURSE",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Prawns", "quantity": "500g" },
            { "name": "Onions", "quantity": "3 large" },
            { "name": "Tomatoes", "quantity": "2 large" },
            { "name": "Coconut", "quantity": "1/2 cup" }
        ]
    },

    // DESSERTS
    {
        "id": 19,
        "name": "Gulab Jamun",
        "description": "Soft milk dumplings soaked in rose-flavored sugar syrup.",
        "image": "https://placehold.co/300x200/8B4513/FFD700?text=Gulab+Jamun",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Milk Powder", "quantity": "1 cup" },
            { "name": "Sugar", "quantity": "2 cups" },
            { "name": "Rose Water", "quantity": "1 tsp" },
            { "name": "Cardamom", "quantity": "4 pods" }
        ]
    },
    {
        "id": 20,
        "name": "Ras Malai",
        "description": "Soft cottage cheese dumplings in sweetened thickened milk with cardamom.",
        "image": "https://placehold.co/300x200/FFFACD/DAA520?text=Ras+Malai",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Paneer", "quantity": "200g" },
            { "name": "Milk", "quantity": "1 liter" },
            { "name": "Sugar", "quantity": "1/2 cup" },
            { "name": "Pistachios", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 21,
        "name": "Chocolate Brownie",
        "description": "Rich and fudgy chocolate brownie served with vanilla ice cream.",
        "image": "https://placehold.co/300x200/654321/FFFFE0?text=Chocolate+Brownie",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Dark Chocolate", "quantity": "200g" },
            { "name": "Butter", "quantity": "100g" },
            { "name": "Eggs", "quantity": "2" },
            { "name": "Flour", "quantity": "1/2 cup" }
        ]
    },
    {
        "id": 22,
        "name": "Kulfi",
        "description": "Traditional Indian ice cream made with thickened milk and nuts.",
        "image": "https://placehold.co/300x200/F5FFFA/CD853F?text=Kulfi",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Full-fat Milk", "quantity": "1 liter" },
            { "name": "Sugar", "quantity": "1/2 cup" },
            { "name": "Almonds", "quantity": "1/4 cup" },
            { "name": "Pistachios", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 23,
        "name": "Tiramisu",
        "description": "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
        "image": "https://placehold.co/300x200/F5E6D3/8B4513?text=Tiramisu",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Mascarpone", "quantity": "250g" },
            { "name": "Ladyfingers", "quantity": "200g" },
            { "name": "Coffee", "quantity": "1 cup" },
            { "name": "Cocoa Powder", "quantity": "2 tbsp" }
        ]
    },

    // SIDES/BREAD
    {
        "id": 24,
        "name": "Garlic Naan",
        "description": "Soft leavened bread topped with garlic and fresh coriander.",
        "image": "https://placehold.co/300x200/FFFACD/8B4513?text=Garlic+Naan",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "All-purpose Flour", "quantity": "2 cups" },
            { "name": "Garlic", "quantity": "6 cloves" },
            { "name": "Yogurt", "quantity": "1/4 cup" },
            { "name": "Fresh Coriander", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 25,
        "name": "Butter Roti",
        "description": "Whole wheat flatbread brushed with butter and cooked on tawa.",
        "image": "https://placehold.co/300x200/DEB887/8B4513?text=Butter+Roti",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "Whole Wheat Flour", "quantity": "2 cups" },
            { "name": "Butter", "quantity": "3 tbsp" },
            { "name": "Salt", "quantity": "1/2 tsp" },
            { "name": "Water", "quantity": "3/4 cup" }
        ]
    },
    {
        "id": 26,
        "name": "Jeera Rice",
        "description": "Fragrant basmati rice cooked with cumin seeds and whole spices.",
        "image": "https://placehold.co/300x200/F5F5DC/8B4513?text=Jeera+Rice",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "Basmati Rice", "quantity": "1.5 cups" },
            { "name": "Cumin Seeds", "quantity": "1 tsp" },
            { "name": "Bay Leaves", "quantity": "2" },
            { "name": "Ghee", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 27,
        "name": "Mixed Vegetable Raita",
        "description": "Cooling yogurt-based side dish with cucumber, onion, and tomato.",
        "image": "https://placehold.co/300x200/F0FFFF/32CD32?text=Mixed+Raita",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "Yogurt", "quantity": "1 cup" },
            { "name": "Cucumber", "quantity": "1 medium" },
            { "name": "Onion", "quantity": "1 small" },
            { "name": "Mint Leaves", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 28,
        "name": "Papad",
        "description": "Crispy lentil wafers roasted or fried, perfect accompaniment.",
        "image": "https://placehold.co/300x200/F5DEB3/8B4513?text=Papad",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "Lentil Papad", "quantity": "4 pieces" },
            { "name": "Oil", "quantity": "for frying" }
        ]
    },

    // ADDITIONAL VEG MAIN COURSES
    {
        "id": 29,
        "name": "Paneer Makhani",
        "description": "Cottage cheese in rich tomato and cashew gravy with butter.",
        "image": "https://placehold.co/300x200/FFE4B5/8B4513?text=Paneer+Makhani",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Paneer", "quantity": "300g" },
            { "name": "Cashews", "quantity": "1/2 cup" },
            { "name": "Tomatoes", "quantity": "4 large" },
            { "name": "Butter", "quantity": "3 tbsp" }
        ]
    },
    {
        "id": 30,
        "name": "Aloo Gobi",
        "description": "Dry curry with potatoes and cauliflower cooked with turmeric and spices.",
        "image": "https://placehold.co/300x200/FFFACD/B8860B?text=Aloo+Gobi",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Potatoes", "quantity": "3 medium" },
            { "name": "Cauliflower", "quantity": "1 medium head" },
            { "name": "Turmeric", "quantity": "1 tsp" },
            { "name": "Ginger", "quantity": "1 inch piece" }
        ]
    },
    {
        "id": 31,
        "name": "Bhindi Masala",
        "description": "Stir-fried okra with onions, tomatoes and aromatic spices.",
        "image": "https://placehold.co/300x200/90EE90/228B22?text=Bhindi+Masala",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Okra", "quantity": "500g" },
            { "name": "Onions", "quantity": "2 medium" },
            { "name": "Tomatoes", "quantity": "2 medium" },
            { "name": "Dry Mango Powder", "quantity": "1 tsp" }
        ]
    },
    {
        "id": 32,
        "name": "Baingan Bharta",
        "description": "Roasted and mashed eggplant cooked with onions, tomatoes, and spices.",
        "image": "https://placehold.co/300x200/DDA0DD/4B0082?text=Baingan+Bharta",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Large Eggplant", "quantity": "1" },
            { "name": "Onions", "quantity": "2 medium" },
            { "name": "Tomatoes", "quantity": "2 large" },
            { "name": "Green Chilies", "quantity": "3" }
        ]
    },

    // ADDITIONAL NON-VEG DISHES
    {
        "id": 33,
        "name": "Chicken Curry",
        "description": "Traditional home-style chicken curry with onions, tomatoes, and spices.",
        "image": "https://placehold.co/300x200/F08080/8B0000?text=Chicken+Curry",
        "mealType": "MAIN COURSE",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Chicken", "quantity": "750g" },
            { "name": "Onions", "quantity": "3 large" },
            { "name": "Tomatoes", "quantity": "3 medium" },
            { "name": "Coconut Milk", "quantity": "1/2 cup" }
        ]
    },
    {
        "id": 34,
        "name": "Tandoori Chicken",
        "description": "Marinated chicken roasted in tandoor with yogurt and spice marinade.",
        "image": "https://placehold.co/300x200/FF6347/8B0000?text=Tandoori+Chicken",
        "mealType": "MAIN COURSE",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Chicken", "quantity": "1 whole" },
            { "name": "Yogurt", "quantity": "1 cup" },
            { "name": "Tandoori Masala", "quantity": "3 tbsp" },
            { "name": "Lemon Juice", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 35,
        "name": "Egg Curry",
        "description": "Hard-boiled eggs in spicy onion and tomato gravy.",
        "image": "https://placehold.co/300x200/FFFFE0/DAA520?text=Egg+Curry",
        "mealType": "MAIN COURSE",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Eggs", "quantity": "6" },
            { "name": "Onions", "quantity": "2 large" },
            { "name": "Tomatoes", "quantity": "3 medium" },
            { "name": "Coconut", "quantity": "1/4 cup" }
        ]
    },

    // MORE STARTERS
    {
        "id": 36,
        "name": "Vegetable Samosa",
        "description": "Crispy triangular pastries filled with spiced potato and peas.",
        "image": "https://placehold.co/300x200/F4A460/8B4513?text=Veg+Samosa",
        "mealType": "STARTER",
        "type": "VEG",
        "ingredients": [
            { "name": "Potatoes", "quantity": "4 medium" },
            { "name": "Green Peas", "quantity": "1/2 cup" },
            { "name": "Pastry Sheets", "quantity": "12" },
            { "name": "Cumin Seeds", "quantity": "1 tsp" }
        ]
    },
    {
        "id": 37,
        "name": "Onion Bhaji",
        "description": "Crispy deep-fried onion fritters with gram flour and spices.",
        "image": "https://placehold.co/300x200/DEB887/8B4513?text=Onion+Bhaji",
        "mealType": "STARTER",
        "type": "VEG",
        "ingredients": [
            { "name": "Onions", "quantity": "3 large" },
            { "name": "Gram Flour", "quantity": "1 cup" },
            { "name": "Green Chilies", "quantity": "3" },
            { "name": "Carom Seeds", "quantity": "1/2 tsp" }
        ]
    },
    {
        "id": 38,
        "name": "Chicken Wings",
        "description": "Spicy marinated chicken wings grilled to perfection.",
        "image": "https://placehold.co/300x200/CD853F/8B0000?text=Chicken+Wings",
        "mealType": "STARTER",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Chicken Wings", "quantity": "1kg" },
            { "name": "Hot Sauce", "quantity": "1/4 cup" },
            { "name": "Garlic Powder", "quantity": "1 tsp" },
            { "name": "Paprika", "quantity": "1 tsp" }
        ]
    },

    // MORE DESSERTS
    {
        "id": 39,
        "name": "Kheer",
        "description": "Traditional rice pudding cooked with milk, sugar, and cardamom.",
        "image": "https://placehold.co/300x200/FFFACD/CD853F?text=Rice+Kheer",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Basmati Rice", "quantity": "1/4 cup" },
            { "name": "Full-fat Milk", "quantity": "1 liter" },
            { "name": "Sugar", "quantity": "1/2 cup" },
            { "name": "Almonds", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 40,
        "name": "Jalebi",
        "description": "Crispy spiral-shaped sweet soaked in sugar syrup with saffron.",
        "image": "https://placehold.co/300x200/FFA500/8B0000?text=Jalebi",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "All-purpose Flour", "quantity": "1 cup" },
            { "name": "Sugar", "quantity": "2 cups" },
            { "name": "Saffron", "quantity": "1 pinch" },
            { "name": "Lemon Juice", "quantity": "1 tsp" }
        ]
    },
    {
        "id": 41,
        "name": "Cheesecake",
        "description": "Creamy New York style cheesecake with berry compote.",
        "image": "https://placehold.co/300x200/F5F5DC/8B4513?text=Cheesecake",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Cream Cheese", "quantity": "500g" },
            { "name": "Digestive Biscuits", "quantity": "200g" },
            { "name": "Sugar", "quantity": "1/2 cup" },
            { "name": "Mixed Berries", "quantity": "1 cup" }
        ]
    },

    // MORE SIDES
    {
        "id": 42,
        "name": "Stuffed Kulcha",
        "description": "Leavened bread stuffed with spiced potato filling, cooked in tandoor.",
        "image": "https://placehold.co/300x200/FFFACD/8B4513?text=Stuffed+Kulcha",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "All-purpose Flour", "quantity": "2 cups" },
            { "name": "Potatoes", "quantity": "3 medium" },
            { "name": "Paneer", "quantity": "100g" },
            { "name": "Fresh Coriander", "quantity": "3 tbsp" }
        ]
    },
    {
        "id": 43,
        "name": "Plain Rice",
        "description": "Steamed basmati rice, perfect accompaniment to curries.",
        "image": "https://placehold.co/300x200/F5F5DC/8B4513?text=Plain+Rice",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "Basmati Rice", "quantity": "1.5 cups" },
            { "name": "Salt", "quantity": "1 tsp" },
            { "name": "Water", "quantity": "3 cups" }
        ]
    },
    {
        "id": 44,
        "name": "Green Salad",
        "description": "Fresh mixed greens with cucumber, tomatoes, and lemon dressing.",
        "image": "https://placehold.co/300x200/90EE90/006400?text=Green+Salad",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "Mixed Greens", "quantity": "2 cups" },
            { "name": "Cucumber", "quantity": "1 large" },
            { "name": "Tomatoes", "quantity": "2 medium" },
            { "name": "Lemon", "quantity": "1" }
        ]
    },

    // ADDITIONAL SPECIALTIES
    {
        "id": 45,
        "name": "Pav Bhaji",
        "description": "Spicy mixed vegetable curry served with buttered bread rolls.",
        "image": "https://placehold.co/300x200/FF6347/8B4513?text=Pav+Bhaji",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Mixed Vegetables", "quantity": "500g" },
            { "name": "Pav Bread", "quantity": "8 pieces" },
            { "name": "Butter", "quantity": "4 tbsp" },
            { "name": "Pav Bhaji Masala", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 46,
        "name": "Dosa",
        "description": "Crispy South Indian crepe made from fermented rice and lentil batter.",
        "image": "https://placehold.co/300x200/F5DEB3/8B4513?text=Dosa",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Rice", "quantity": "2 cups" },
            { "name": "Urad Dal", "quantity": "1/2 cup" },
            { "name": "Fenugreek Seeds", "quantity": "1 tsp" },
            { "name": "Salt", "quantity": "1 tsp" }
        ]
    },
    {
        "id": 47,
        "name": "Idli Sambhar",
        "description": "Steamed rice cakes served with spicy lentil soup and coconut chutney.",
        "image": "https://placehold.co/300x200/FFFAFA/DAA520?text=Idli+Sambhar",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Rice", "quantity": "2 cups" },
            { "name": "Urad Dal", "quantity": "1/2 cup" },
            { "name": "Toor Dal", "quantity": "1 cup" },
            { "name": "Mixed Vegetables", "quantity": "1 cup" }
        ]
    },
    {
        "id": 48,
        "name": "Chicken 65",
        "description": "Spicy deep-fried chicken appetizer with South Indian flavors.",
        "image": "https://placehold.co/300x200/FF4500/8B0000?text=Chicken+65",
        "mealType": "STARTER",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Chicken", "quantity": "500g" },
            { "name": "Red Chili Powder", "quantity": "2 tbsp" },
            { "name": "Curry Leaves", "quantity": "15" },
            { "name": "Yogurt", "quantity": "1/4 cup" }
        ]
    },
    {
        "id": 49,
        "name": "Mutton Biryani",
        "description": "Aromatic basmati rice cooked with tender mutton pieces and spices.",
        "image": "https://placehold.co/300x200/D2691E/8B0000?text=Mutton+Biryani",
        "mealType": "MAIN COURSE",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Mutton", "quantity": "750g" },
            { "name": "Basmati Rice", "quantity": "2 cups" },
            { "name": "Saffron", "quantity": "1 pinch" },
            { "name": "Mint Leaves", "quantity": "1/2 cup" }
        ]
    },
    {
        "id": 50,
        "name": "Fish Fry",
        "description": "Marinated fish pieces shallow fried with South Indian spices.",
        "image": "https://placehold.co/300x200/F0E68C/8B4513?text=Fish+Fry",
        "mealType": "STARTER",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Fish Fillets", "quantity": "500g" },
            { "name": "Turmeric", "quantity": "1 tsp" },
            { "name": "Red Chili Powder", "quantity": "2 tsp" },
            { "name": "Curry Leaves", "quantity": "10" }
        ]
    },

    // BEVERAGES AND DRINKS
    {
        "id": 51,
        "name": "Masala Chai",
        "description": "Traditional Indian spiced tea with milk and aromatic spices.",
        "image": "https://placehold.co/300x200/D2691E/FFFACD?text=Masala+Chai",
        "mealType": "BEVERAGES",
        "type": "VEG",
        "ingredients": [
            { "name": "Black Tea", "quantity": "2 tsp" },
            { "name": "Milk", "quantity": "1 cup" },
            { "name": "Ginger", "quantity": "1 inch" },
            { "name": "Cardamom", "quantity": "3 pods" }
        ]
    },
    {
        "id": 52,
        "name": "Fresh Lime Soda",
        "description": "Refreshing drink with fresh lime juice, soda, and a hint of mint.",
        "image": "https://placehold.co/300x200/90EE90/228B22?text=Fresh+Lime+Soda",
        "mealType": "BEVERAGES",
        "type": "VEG",
        "ingredients": [
            { "name": "Fresh Lime", "quantity": "2" },
            { "name": "Soda Water", "quantity": "1 glass" },
            { "name": "Sugar", "quantity": "2 tsp" },
            { "name": "Mint Leaves", "quantity": "8-10" }
        ]
    },
    {
        "id": 53,
        "name": "Mango Lassi",
        "description": "Creamy yogurt-based drink blended with fresh mango pulp.",
        "image": "https://placehold.co/300x200/FFE4B5/FF8C00?text=Mango+Lassi",
        "mealType": "BEVERAGES",
        "type": "VEG",
        "ingredients": [
            { "name": "Yogurt", "quantity": "1 cup" },
            { "name": "Mango Pulp", "quantity": "1/2 cup" },
            { "name": "Sugar", "quantity": "2 tbsp" },
            { "name": "Ice Cubes", "quantity": "1/2 cup" }
        ]
    },

    // FUSION AND INTERNATIONAL
    {
        "id": 54,
        "name": "Chicken Fried Rice",
        "description": "Indo-Chinese style fried rice with chicken, vegetables, and soy sauce.",
        "image": "https://placehold.co/300x200/F5DEB3/8B4513?text=Chicken+Fried+Rice",
        "mealType": "MAIN COURSE",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Cooked Rice", "quantity": "3 cups" },
            { "name": "Chicken", "quantity": "300g" },
            { "name": "Mixed Vegetables", "quantity": "1 cup" },
            { "name": "Soy Sauce", "quantity": "3 tbsp" }
        ]
    },
    {
        "id": 55,
        "name": "Paneer Chilli",
        "description": "Indo-Chinese fusion dish with paneer, bell peppers, and spicy sauce.",
        "image": "https://placehold.co/300x200/FF6347/FFFFE0?text=Paneer+Chilli",
        "mealType": "STARTER",
        "type": "VEG",
        "ingredients": [
            { "name": "Paneer", "quantity": "300g" },
            { "name": "Bell Peppers", "quantity": "2" },
            { "name": "Onions", "quantity": "1 large" },
            { "name": "Chilli Sauce", "quantity": "3 tbsp" }
        ]
    }
];