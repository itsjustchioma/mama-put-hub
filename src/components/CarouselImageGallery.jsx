import dish1 from "/assets/pexels-ash-376464.jpg";
import dish2 from "/assets/pexels-chevanon-photography-323682.jpg";
import dish3 from "/assets/pexels-ella-olsson-1640772.jpg";
import dish4 from "/assets/pexels-jonathan-borba-2983099.jpg";
import dish5 from "/assets/pexels-karthik-reddy-397913.jpg";
import dish6 from "/assets/pexels-nerfee-mirandilla-3186654.jpg";
import dish7 from "/assets/pexels-rajesh-tp-1633525.jpg";
import dish8 from "/assets/pexels-valeria-boltneva-842571.jpg";
import iicon from "/assets/i icon.png";



const CarouselImageGallery = [
    { imageURL: dish1, name: "Pan Cake", rating: 4.5, path:"/ViewDish" },
    { imageURL: dish2, name: "Lamb Chops", rating: 4.2,path:"/ViewDish" },
    { imageURL: dish3, name: "Potato Spaghetti", rating: 4.7,path:"/ViewDish" },
    { imageURL: dish4, name: "Home Burger", rating: 4.9,path:"/ViewDish" },
    { imageURL: dish5, name: "Pan Cake", rating: 4.6,path:"/ViewDish" },
    { imageURL: dish6, name: "Roasted Diced Beef, Broccoli Served with wine", rating: 4.3 , path:"/ViewDish"},
    { imageURL: dish7, name: "Pizza", rating: 4.8, path:"/ViewDish" },
    { imageURL: dish8, name: "Salad", rating: 4.4, path:"/ViewDish" },
  ];



const CarouselISavedRecipe = [
  { imageURL: iicon, name: "Create New Recipe", rating: '', path:"/NewRecipe" },
  { imageURL: dish2, name: "Lamb Chops", rating: 4.2,path:"/NewRecipe" },
  { imageURL: dish3, name: "Potato Spaghetti", rating: 4.7,path:"/NewRecipe" },
  { imageURL: dish4, name: "Home Burger", rating: 4.9,path:"/NewRecipe" },
  { imageURL: dish5, name: "Pan Cake", rating: 4.6,path:"/NewRecipe" },
  { imageURL: dish6, name: "Roasted Diced Beef, Broccoli Served with wine", rating: 4.3 , path:"/NewRecipe"},
  { imageURL: dish7, name: "Pizza", rating: 4.8, path:"/ViewDish" },
  { imageURL: dish8, name: "Salad", rating: 4.4, path:"/ViewDish" },
];
  
  
  
export default {CarouselImageGallery, CarouselISavedRecipe};