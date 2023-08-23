/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

const products = [
  // Electronics
  {
    name: "Smartphone X",
    description: "Advanced smartphone with AI capabilities.",
    price: 99999,
    category: "Electronics",
    discontinued: false,
  },
  {
    name: "Gaming Console Z",
    description: "Next-gen gaming console with immersive graphics.",
    price: 49999,
    category: "Electronics",
    discontinued: false,
  },
  {
    name: "Smart TV",
    description: "High-resolution smart TV with built-in streaming.",
    price: 79999,
    category: "Electronics",
    discontinued: false,
  },
  {
    name: "Laptop Pro",
    description: "Powerful laptop for professional work.",
    price: 129999,
    category: "Electronics",
    discontinued: false,
  },
  {
    name: "Camera Drone",
    description: "Capture stunning aerial photos and videos.",
    price: 199999,
    category: "Electronics",
    discontinued: false,
  },
  

  // Accessories
  {
    name: "Wireless Earphones",
    description: "Enjoy wireless audio with premium sound quality.",
    price: 9999,
    category: "Accessories",
    discontinued: false,
  },
  {
    name: "Smartwatch",
    description: "Stay connected and track your fitness.",
    price: 14999,
    category: "Accessories",
    discontinued: false,
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable speaker for on-the-go entertainment.",
    price: 6999,
    category: "Accessories",
    discontinued: false,
  },
  {
    name: "Phone Case",
    description: "Stylish and protective case for your smartphone.",
    price: 1999,
    category: "Accessories",
    discontinued: false,
  },
  {
    name: "Power Bank",
    description: "Portable charger for your devices.",
    price: 4999,
    category: "Accessories",
    discontinued: false,
  },
  

  // Wearables
  {
    name: "Fitness Tracker",
    description: "Monitor your health and fitness goals.",
    price: 8999,
    category: "Wearables",
    discontinued: false,
  },
  {
    name: "Smart Glasses",
    description: "Augmented reality glasses for enhanced experiences.",
    price: 29999,
    category: "Wearables",
    discontinued: false,
  },
  {
    name: "Sleep Tracker",
    description: "Track and improve your sleep patterns.",
    price: 5999,
    category: "Wearables",
    discontinued: false,
  },
  {
    name: "Smart Ring",
    description: "Wearable ring for personalized notifications.",
    price: 7999,
    category: "Wearables",
    discontinued: false,
  },
  {
    name: "Fitness Smart Shoes",
    description: "Smart shoes with built-in activity tracking.",
    price: 15999,
    category: "Wearables",
    discontinued: false,
  },


  // Home Appliances
  {
    name: "Smart Home Hub",
    description: "Control your home with voice commands.",
    price: 24999,
    category: "Home Appliances",
    discontinued: false,
  },
  {
    name: "Robotic Vacuum Cleaner",
    description: "Efficiently clean your floors with a robotic assistant.",
    price: 34999,
    category: "Home Appliances",
    discontinued: false,
  },
  {
    name: "Air Purifier",
    description: "Improve the air quality in your home.",
    price: 17999,
    category: "Home Appliances",
    discontinued: false,
  },
  {
    name: "Smart Thermostat",
    description: "Control and automate your home's temperature",
    price: 11999,
    category: "Home Appliances",
    discontinued: false,
  },
  {
    name: "Smart Refrigerator",
    description: "Intelligent refrigerator with advanced features.",
    price: 69999,
    category: "Home Appliances",
    discontinued: false,
  },
 

  // Discontinued products
  {
    name: "Discontinued Electronics 1",
    description: "Outdated electronics at discounted prices.",
    price: 4999,
    category: "Electronics",
    discontinued: true,
  },
  {
    name: "Discontinued Electronics 2",
    description: "Old model electronics for clearance.",
    price: 2999,
    category: "Electronics",
    discontinued: true,
  },
  {
    name: "Discontinued Accessories 1",
    description: "Clearance accessories at discounted prices.",
    price: 1999,
    category: "Accessories",
    discontinued: true,
  },
  {
    name: "Discontinued Accessories 2",
    description: "Outdated accessories at clearance prices.",
    price: 1499,
    category: "Accessories",
    discontinued: true,
  },
  {
    name: "Discontinued Wearables 1",
    description: "Old model wearables for clearance.",
    price: 2499,
    category: "Wearables",
    discontinued: true,
  },
  {
    name: "Discontinued Wearables 2",
    description: "Clearance wearables at discounted prices.",
    price: 2999,
    category: "Wearables",
    discontinued: true,
  },
  {
    name: "Discontinued Home Appliance 1",
    description: "Outdated home appliances at clearance prices.",
    price: 3999,
    category: "Home Appliances",
    discontinued: true,
  },
  {
    name: "Discontinued Home Appliance 2",
    description: "Clearance home appliances at discounted prices.",
    price: 3499,
    category: "Home Appliances",
    discontinued: true,
  },
 
];

