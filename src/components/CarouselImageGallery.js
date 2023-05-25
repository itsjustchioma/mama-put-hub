import dish1 from "/assets/pexels-ash-376464.jpg";
import dish2 from "/assets/pexels-chevanon-photography-323682.jpg";
import dish3 from "/assets/pexels-ella-olsson-1640772.jpg";
import dish4 from "/assets/pexels-jonathan-borba-2983099.jpg";
import dish5 from "/assets/pexels-karthik-reddy-397913.jpg";
import dish6 from "/assets/pexels-nerfee-mirandilla-3186654.jpg";
import dish7 from "/assets/pexels-rajesh-tp-1633525.jpg";
import dish8 from "/assets/pexels-valeria-boltneva-842571.jpg";
import plusSign from "/public/assets/plus1.png";

const CarouselImageGallery = [
  {
    imageURL: dish1,
    name: "Pan Cake",
    rating: 4.5,
    path: "/ViewDish",
    level: "medium",
    time: "50",
    servings: "4",
    ingredients: [
      { name: "flour", quantity: "200g" },
      { name: "milk", quantity: "250ml" },
      { name: "eggs", quantity: "2" },
      { name: "sugar", quantity: "50g" },
      { name: "butter", quantity: "50g" },
    ],
  },
  {
    imageURL: dish2,
    name: "Lamb Chops",
    rating: 4.2,
    path: "/ViewDish",
    level: "like a pro",
    time: "60",
    servings: "4",
    ingredients: [
      { name: "lamb chops", quantity: "500g" },
      { name: "olive oil", quantity: "2 tbsp" },
      { name: "rosemary", quantity: "1 sprig" },
      { name: "garlic", quantity: "4 cloves" },
    ],
  },
  {
    imageURL: dish3,
    name: "Potato Spaghetti",
    rating: 4.7,
    path: "/ViewDish",
    level: "easy",
    time: "30",
    servings: "4",
    ingredients: [
      { name: "potatoes", quantity: "500g" },
      { name: "spaghetti", quantity: "250g" },
      { name: "tomato sauce", quantity: "200ml" },
      { name: "onion", quantity: "1" },
      { name: "herbs", quantity: "1 tbsp" },
      
    ],
  },
  {
    imageURL: dish4,
    name: "Home Burger",
    rating: 4.9,
    path: "/ViewDish",
    level: "medium",
    time: "45",
    servings: "4",
    ingredients: [
      { name: "ground beef", quantity: "500g" },
      { name: "buns", quantity: "4" },
      { name: "cheese", quantity: "4 slices" },
      { name: "lettuce", quantity: "4 leaves" },
      { name: "tomato", quantity: "1" },
    ],
  },
  {
    imageURL: dish5,
    name: "Pan Cake",
    rating: 4.6,
    path: "/ViewDish",
    level: "easy",
    time: "40",
    servings: "4",
    ingredients: [
      { name: "flour", quantity: "200g" },
      { name: "milk", quantity: "250ml" },
      { name: "eggs", quantity: "2" },
      { name: "sugar", quantity: "50g" },
      { name: "butter", quantity: "50g" },
    ],
  },
  {
    imageURL: dish6,
    name: "Roasted Diced Beef, Broccoli Served with wine",
    rating: 4.3,
    path: "/ViewDish",
    level: "like a pro",
    time: "75",
    servings: "4",
    ingredients: [
      { name: "beef", quantity: "500g" },
      { name: "broccoli", quantity: "1 head" },
      { name: "wine", quantity: "100ml" },
      { name: "garlic", quantity: "4 cloves" },
      { name: "olive oil", quantity: "2 tbsp" },
    ],
  },
  {
    imageURL: dish7,
    name: "Pizza",
    rating: 4.8,
    path: "/ViewDish",
    level: "medium",
    time: "55",
    servings: "4",
    ingredients: [
      { name: "dough", quantity: "300g" },
      { name: "tomato sauce", quantity: "200ml" },
      { name: "cheese", quantity: "200g" },
      { name: "pepperoni", quantity: "100g" },
      { name: "bell peppers", quantity: "2" },
    ],
  },
  {
    imageURL: dish8,
    name: "Salad",
    rating: 4.4,
    path: "/ViewDish",
    level: "easy",
    time: "20",
    servings: "4",
    ingredients: [
      { name: "lettuce", quantity: "1 head" },
      { name: "tomato", quantity: "2" },
      { name: "cucumber", quantity: "1" },
      { name: "onion", quantity: "1" },
      { name: "dressing", quantity: "4 tbsp" },
    ],
  },
];



const CarouselISavedRecipe = [
  {
    imageURL: plusSign,
    name: "Create New Recipe",
    rating: "",
    path: "/NewRecipe",
  },
  {
    imageURL: dish2,
    name: "Lamb Chops",
    rating: 4.2,
    path: "/ViewDish",
    level: "hard",
    time: "60",
    ingredients: ["lamb chops", "olive oil", "rosemary", "garlic"],
  },
  {
    imageURL: dish3,
    name: "Potato Spaghetti",
    rating: 4.7,
    path: "/NewRecipe",
    level: "easy",
    time: "30",
    ingredients: ["potatoes", "spaghetti", "tomato sauce", "onion", "herbs"],
  },
  {
    imageURL: dish4,
    name: "Home Burger",
    rating: 4.9,
    path: "/NewRecipe",
    level: "medium",
    time: "45",
    ingredients: ["ground beef", "buns", "cheese", "lettuce", "tomato"],
  },
  {
    imageURL: dish5,
    name: "Pan Cake",
    rating: 4.6,
    path: "/NewRecipe",
    level: "easy",
    time: "40",
    ingredients: ["flour", "milk", "eggs", "sugar", "butter"],
  },
  {
    imageURL: dish6,
    name: "Roasted Diced Beef, Broccoli Served with wine",
    rating: 4.3,
    path: "/NewRecipe",
    level: "hard",
    time: "75",
    ingredients: ["beef", "broccoli", "wine", "garlic", "olive oil"],
  },
  {
    imageURL: dish7,
    name: "Pizza",
    rating: 4.8,
    path: "/ViewDish",
    level: "medium",
    time: "55",
    ingredients: ["dough", "tomato sauce", "cheese", "pepperoni", "bell peppers"],
  },
  {
    imageURL: dish8,
    name: "Salad",
    rating: 4.4,
    path: "/ViewDish",
    level: "easy",
    time: "20",
    ingredients: ["lettuce", "tomato", "cucumber", "onion", "dressing"],
  },
];



export default { CarouselImageGallery, CarouselISavedRecipe };
