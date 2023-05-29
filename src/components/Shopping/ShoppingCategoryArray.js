export const ShoppingArray = [
  {
    name: "Bread",
    img: "https://images.pexels.com/photos/1079020/pexels-photo-1079020.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    get noOfIngredients() {
      return this.ingredients.length;
    },
    backgroundColor: "pastel-blue",
    ingredients: ["Flour", "Butter", "Yeast", "Salt"],
  },
  {
    name: "Greek Salad",
    img: "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=600",
    get noOfIngredients() {
      return this.ingredients.length;
    },
    backgroundColor: "laurel-green",
    ingredients: ["Avocado", "Lettuce", "Blue Cheese", "Tomatoes"],
  },
  {
    name: "Cheesecake",
    img: "https://images.pexels.com/photos/4040691/pexels-photo-4040691.jpeg?auto=compress&cs=tinysrgb&w=600",
    get noOfIngredients() {
      return this.ingredients.length;
    },
    backgroundColor: "lemon-meringue",
    ingredients: ["Cream Cheese", "Double whip cream", "Digestives Biscuits"],
  },
  {
    name: "Brown Soup",
    img: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    get noOfIngredients() {
      return this.ingredients.length;
    },
    backgroundColor: "copper-orange",
    ingredients: ["Water", "Chicken", "Pumpkin"],
  },
  {
    name: "Fish Salad Dish",
    img: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    get noOfIngredients() {
      return this.ingredients.length;
    },
    backgroundColor: "pastel-blue",
    ingredients: ["Fish", "Mint", "Coriander"],
  },
];

export const removeCategory = (categoryName) => {
  const index = ShoppingArray.findIndex((item) => item.name === categoryName);
  if (index !== -1) {
    ShoppingArray.splice(index, 1);
  }
};
