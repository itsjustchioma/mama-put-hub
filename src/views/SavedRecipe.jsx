import React from "react";
import { ShoppingArray } from "../components/Shopping/ShoppingCategoryArray";
import BackArrow from "../components/BackClick/BackArrow";

function SavedRecipe({closeModal}) {
   const handleBackClick = () => {
     closeModal(false);
   };
  return (
    <div className="ml-6 mt-4">
      <BackArrow onClick={handleBackClick} />
      <h1 className="mt-4">Saved Folder of Recipes</h1>
      <p>Number of recipes</p>
      <p>Number of ingredients</p>
    </div>
  );
}

export default SavedRecipe;
