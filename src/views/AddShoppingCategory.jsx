import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingArray } from "../components/Shopping/ShoppingCategoryArray.js";
import BackArrow from "../components/BackClick/BackArrow.jsx";
import { account, databases } from "../services/appwriteConfig.js";
import { v4 as uuidv4 } from "uuid";


const AddShoppingCategory = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [ingredientList, setIngredientList] = useState([]);

const handleBackClick = () => {
  navigate("/Shopping");
};

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleIngredientChange = (e, index) => {
    const updatedIngredientList = [...ingredientList];
    updatedIngredientList[index] = e.target.value;
    setIngredientList(updatedIngredientList);
  };

  const handleAddIngredient = () => {
    setIngredientList([...ingredientList, ""]);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredientList = [...ingredientList];
    updatedIngredientList.splice(index, 1);
    setIngredientList(updatedIngredientList);
  };

  useEffect(() => {
    let promise = databases.listDocuments(
      "64773737337f23de254d",
      "647905e0a9f44dd4d1a4",
      [
        // Query.equal('food_name')
      ]
    );

    promise.then(
      function (response) {
        console.log(response);
        setCarouselItems(response.documents);
        setBookmarkStatus(Array(response.documents.length).fill(false));
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);


  const userId = account.get();

  userId.then(function (response) {
    console.log(response);
      console.log(response.$id);
  }, function (error) {
      console.log(error);
  });
  const handleSaveCategory = async () => {
    const documentId = uuidv4(); // Generate a random UUID
  
    const newCategory = {
      userId: (await userId).$id,
      category_name: categoryName,
      image: selectedImage ? URL.createObjectURL(selectedImage) : "",
      color: selectedColor,
      ingredients: ingredientList,
      
    };
  
    console.log("New Category:", newCategory); // Log the new category object
  
    // try {
    //   // Save the new category to the database or any other storage service
    //   const savedList = await saveShoppingList({ documentId, ...newCategory });
    //   console.log("Shopping list saved:", savedList);
    // } catch (error) {
    //   console.error("Error saving shopping list:", error);
    // }

    try {
      const documentId = uuidv4(); // Generate a random UUID
      console.log('Recipe:', newCategory);
      console.log('Document ID:', documentId);
  
      const response = await databases.createDocument(
        "64773737337f23de254d", // Your project ID
        "647905e0a9f44dd4d1a4", // Your collection ID
        documentId, // Use the generated UUID as the document ID
        newCategory,
      );
  
      console.log('Recipe created:', response);
      navigate("/shopping");
      return response; // Optionally, return the created recipe document
    } catch (error) {
      console.error('Error creating recipe:', error);
      throw error;
    }
  
    // Redirect back to the Shopping component or any other route you prefer
  
  };
  
  
  
  
  
  
  const saveShoppingList = async (formData) => {
    try {
      const collectionId = "64773737337f23de254d"; // Replace with your actual collection ID
      const document = await databases.createDocument(collectionId, formData);
  
      console.log("Shopping list created:", document);
      return document;
    } catch (error) {
      console.error("Error saving shopping list:", error);
      throw new Error("Failed to save shopping list: " + error.message);
    }
  };
  
  
  
  
  

  return (
    <div className="max-w-lg mx-auto my-12 p-4">
      <BackArrow onClick={handleBackClick} />
      <h1 className="text-xl font-semibold mb-4">Add Shopping Category</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="categoryName" className="text-lg">
            Category Name:
          </label>
          <input
            type="text"
            id="categoryName"
            value={categoryName}
            onChange={handleCategoryNameChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="imageUpload" className="text-lg">
            Image:
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageUpload}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="colorSelect" className="text-lg">
            Color:
          </label>
          <select
            id="colorSelect"
            value={selectedColor}
            onChange={handleColorChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            <option value="">Select a color</option>
            <option value="pastel-blue">Pastel Blue</option>
            <option value="laurel-green">Laurel Green</option>
            <option value="copper-orange">Copper Orange</option>
            <option value="pastel-pink">Pastel Pink</option>
            <option value="lemon-meringue">Lemon Meringue</option>
          </select>
        </div>
        <div>
          <label className="text-lg">Ingredients:</label> <br />
          {ingredientList.map((ingredient, index) => (
            <div key={index} className="flex items-center">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(e, index)}
                className="border border-gray-300 rounded-md p-2 flex-1 mr-2"
              />
              <button
                type="button"
                onClick={() => handleRemoveIngredient(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddIngredient}
            className="bg-copper-orange hover:bg-grey-text text-black px-3  py-2 rounded-md mt-2"
          >
            Add Ingredient
          </button>
        </div>
        <button
          type="button"
          onClick={handleSaveCategory}
          className="bg-laurel-green hover:bg-pastel-blue text-black px-3 py-2 mt-2 rounded-md"
        >
          Save Category
        </button>
      </form>
    </div>
  );
};

export default AddShoppingCategory;
