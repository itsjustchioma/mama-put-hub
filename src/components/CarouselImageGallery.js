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
    type: "dessert", 
    time: "50",
    servings: "4",
    ingredients: [
      { name: "flour", quantity: "200g" },
      { name: "milk", quantity: "250ml" },
      { name: "eggs", quantity: "2" },
      { name: "sugar", quantity: "50g" },
      { name: "butter", quantity: "50g" },
    ],
    steps: [
      {
        step: "Step 1: Mix flour, milk, eggs, sugar, and butter in a bowl.",
        time: 5,
      },
      {
        step: "Step 2: Heat a non-stick pan and pour a ladleful of batter onto it.",
        time: 2,
      },
      {
        step: "Step 3: Cook until bubbles appear on the surface, then flip the pancake and cook the other side.",
        time: 3,
      },
      {
        step: "Step 4: Repeat with the remaining batter to make more pancakes.",
        time: 10,
      },
      { step: "Step 5: Serve hot with your favorite toppings.", time: 5 },
    ],
    author: "Sarah Pala",
  },
  {
    imageURL: dish2,
    name: "Lamb Chops",
    rating: 4.2,
    path: "/ViewDish",
    level: "like a pro",
    time: 60,
    servings: "4",
    type: "non-vegitarian", 
    ingredients: [
      { name: "lamb chops", quantity: "500g" },
      { name: "olive oil", quantity: "2 tbsp" },
      { name: "rosemary", quantity: "1 sprig" },
      { name: "garlic", quantity: "4 cloves" },
    ],
    steps: [
      { step: "Step 1: Preheat the grill or stovetop pan.", time: 5 },
      {
        step: "Step 2: Season the lamb chops with salt, pepper, and olive oil.",
        time: 2,
      },
      {
        step: "Step 3: Grill or cook the lamb chops for about 4on each side.",
        time: 8,
      },
      {
        step: "Step 4: Sprinkle with rosemary and garlic while cooking.",
        time: 2,
      },
      {
        step: "Step 5: Let the lamb chops rest for a wbefore serving.",
        time: 3,
      },
    ],
    author: "John Doe",
  },
  {
    imageURL: dish3,
    name: "Potato Spaghetti",
    rating: 4.7,
    path: "/ViewDish",
    level: "easy",
    time: 30,
    servings: "4",
    type: "main", 
    ingredients: [
      { name: "potatoes", quantity: "500g" },
      { name: "spaghetti", quantity: "250g" },
      { name: "tomato sauce", quantity: "200ml" },
      { name: "onion", quantity: "1" },
      { name: "herbs", quantity: "1 tbsp" },
    ],
    steps: [
      { step: "Step 1: Peel and dice the potatoes.", time: 5 },
      {
        step: "Step 2: Cook the spaghetti according to package instructions.",
        time: 10,
      },
      {
        step: "Step 3: In a separate pan, sauté the diced potatoes and onions.",
        time: 8,
      },
      { step: "Step 4: Add tomato sauce and herbs to the pan.", time: 3 },
      {
        step: "Step 5: Combine the cooked spaghetti with the potato mixture.",
        time: 4,
      },
      { step: "Step 6: Serve hot and enjoy!", time: 51 },
    ],
    author: "Chioma Nwosu",

  },
  {
    imageURL: dish4,
    name: "Home Burger",
    rating: 4.9,
    path: "/ViewDish",
    level: "medium",
    time: 45,
    servings: "4",
    type: "sandwich", 
    ingredients: [
      { name: "ground beef", quantity: "500g" },
      { name: "buns", quantity: "4" },
      { name: "cheese", quantity: "4 slices" },
      { name: "lettuce", quantity: "4 leaves" },
      { name: "tomato", quantity: "1" },
    ],
    steps: [
      { step: "Step 1: Form ground beef into patties.", time: 5 },
      {
        step: "Step 2: Grill or cook the patties until desired doneness.",
        time: 5,
      },
      { step: "Step 3: Toast the buns on the grill or in a toaster.", time: 2 },
      {
        step: "Step 4: Assemble the burgers with cheese, lettuce, and tomato.",
        time: 3,
      },
      {
        step: "Step 5: Serve with your favorite condiments and enjoy!",
        time: 5,
      },
    ],
    author: "David Ajanaku",

  },
  {
    imageURL: dish5,
    name: "Pan Cake",
    rating: 4.6,
    path: "/ViewDish",
    level: "easy",
    time: 40,
    servings: "4",
    type: "dessert", 
    ingredients: [
      { name: "flour", quantity: "200g" },
      { name: "milk", quantity: "250ml" },
      { name: "eggs", quantity: "2" },
      { name: "sugar", quantity: "50g" },
      { name: "butter", quantity: "50g" },
    ],
    steps: [
      {
        step: "Step 1: Mix flour, milk, eggs, sugar, and butter in a bowl.",
        time: 5,
      },
      {
        step: "Step 2: Heat a non-stick pan and pour a ladleful of batter onto it.",
        time: 2,
      },
      {
        step: "Step 3: Cook until bubbles appear on the surface, then flip the pancake and cook the other side.",
        time: 3,
      },
      {
        step: "Step 4: Repeat with the remaining batter to make more pancakes.",
        time: 1,
      },
      { step: "Step 5: Serve hot with your favorite toppings.", time: 5 },
    ],
    author: "Winner Abalaogu",

  },
  {
    imageURL: dish6,
    name: "Roasted Diced Beef, Broccoli Served with wine",
    rating: 4.3,
    path: "/ViewDish",
    level: "like a pro",
    time: 75,
    servings: "4",
    type: "main", 
    ingredients: [
      { name: "beef", quantity: "500g" },
      { name: "broccoli", quantity: "1 head" },
      { name: "wine", quantity: "100ml" },
      { name: "garlic", quantity: "4 cloves" },
      { name: "olive oil", quantity: "2 tbsp" },
    ],
    steps: [
      { step: "Step 1: Preheat the oven to 400°F (200°C).", time: 5 },
      {
        step: "Step 2: Season the diced beef with salt, pepper, and olive oil.",
        time: 2,
      },
      {
        step: "Step 3: Spread the beef on a baking sheet and roast for 205",
        time: 5,
      },
      { step: "Step 4: Steam the broccoli until tender.", time: 10 },
      {
        step: "Step 5: In a separate pan, sauté garlic in olive oil.",
        time: 5,
      },
      {
        step: "Step 6: Add the roasted beef, steamed broccoli, and wine to the pan.",
        time: 8,
      },
      { step: " ", time: 5 },
    ],
    author: "Michael  Asomugha",

  },
  {
    imageURL: dish7,
    name: "Pizza",
    rating: 4.8,
    path: "/ViewDish",
    level: "medium",
    time: 55,
    type: "italian", 
    servings: "4",

    ingredients: [
      { name: "dough", quantity: "300g" },
      { name: "tomato sauce", quantity: "200ml" },
      { name: "cheese", quantity: "200g" },
      { name: "pepperoni", quantity: "100g" },
      { name: "bell peppers", quantity: "2" },
    ],
    steps: [
      {
        step: "Step 1: Roll out the pizza dough on a floured surface.",
        time: 2,
      },
      { step: "Step 2: Spread tomato sauce evenly on the dough.", time: 5 },
      {
        step: "Step 3: Sprinkle cheese, pepperoni, and bell peppers on top.",
        time: 5,
      },
      { step: "Step 4: Preheat the oven to 450°F (230°C).", time: 5 },
      {
        step: "Step 5: Transfer the pizza onto a baking sheet and bake for 125",
        time: 5,
      },
      {
        step: "Step 6: Remove from the oven, let it cool slightly, and slice.",
        time: 5,
      },
      { step: "Step 7: Enjoy your homemade pizza!", time: 5 },
    ],
    author: "Greg Pala",

  },
  {
    imageURL: dish8,
    name: "Salad",
    rating: 4.4,
    path: "/ViewDish",
    level: "easy",
    time: 20,
    servings: "4",
    type: "salad", 
    ingredients: [
      { name: "lettuce", quantity: "1 head" },
      { name: "tomato", quantity: "2" },
      { name: "cucumber", quantity: "1" },
      { name: "onion", quantity: "1" },
      { name: "dressing", quantity: "4 tbsp" },
    ],
    steps: [
      {
        step: "Step 1: Wash and chop the lettuce, tomatoes, cucumber, and onion.",
        time:11,
      },
      { step: "Step 2: In a large bowl, combine all the vegetables.", time: 2 },
      {
        step: "Step 3: Drizzle the dressing over the salad and toss well.",
        time: 2,
      },
      { step: "Step 4: Serve chilled and enjoy!", time: 6 },
    ],
    author: "Celestine Nwachukwu",

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
    time: 60,
    ingredients: ["lamb chops", "olive oil", "rosemary", "garlic"],
  },
  {
    imageURL: dish3,
    name: "Potato Spaghetti",
    rating: 4.7,
    path: "/NewRecipe",
    level: "easy",
    time: 30,
    ingredients: ["potatoes", "spaghetti", "tomato sauce", "onion", "herbs"],
  },
  {
    imageURL: dish4,
    name: "Home Burger",
    rating: 4.9,
    path: "/NewRecipe",
    level: "medium",
    time: 45,
    ingredients: ["ground beef", "buns", "cheese", "lettuce", "tomato"],
  },
  {
    imageURL: dish5,
    name: "Pan Cake",
    rating: 4.6,
    path: "/NewRecipe",
    level: "easy",
    time: 40,
    ingredients: ["flour", "milk", "eggs", "sugar", "butter"],
  },
  {
    imageURL: dish6,
    name: "Roasted Diced Beef, Broccoli Served with wine",
    rating: 4.3,
    path: "/NewRecipe",
    level: "hard",
    time: 75,
    ingredients: ["beef", "broccoli", "wine", "garlic", "olive oil"],
  },
  {
    imageURL: dish7,
    name: "Pizza",
    rating: 4.8,
    path: "/ViewDish",
    level: "medium",
    time: 55,
    ingredients: [
      "dough",
      "tomato sauce",
      "cheese",
      "pepperoni",
      "bell peppers",
    ],
  },
  {
    imageURL: dish8,
    name: "Salad",
    rating: 4.4,
    path: "/ViewDish",
    level: "easy",
    time: 20,
    ingredients: ["lettuce", "tomato", "cucumber", "onion", "dressing"],
  },
];

export default { CarouselImageGallery, CarouselISavedRecipe };
