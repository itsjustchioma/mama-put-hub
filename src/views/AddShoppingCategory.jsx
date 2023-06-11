import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackArrow from "../components/BackClick/BackArrow.jsx";
import { account, databases, storage } from "../services/appwriteConfig.js";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const AddShoppingCategory = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [ingredientList, setIngredientList] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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

  userId.then(
    function (response) {
      console.log(response);
      console.log(response.$id);
    },
    function (error) {
      console.log(error);
    }
  );
  const handleSaveCategory = async (event) => {
    // Other code...

    const fileInput = document.getElementById("imageUpload");
    const file = fileInput.files[0];
    const fileId = uuidv4(); // Generate a random UUID

    const newImage = await storage.createFile(
      "647e6735532e8f214235",
      fileId,
      file
    );
    const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/647e6735532e8f214235/files/${fileId}/view?project=64676cf547e8830694b8&mode=admin`;

    const newCategory = {
      userId: (await userId).$id,
      category_name: categoryName,
      picture: imageUrl, // Use the image URL in the newCategory object
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
      console.log("Recipe:", newCategory);
      console.log("Document ID:", documentId);

      const response = await databases.createDocument(
        "64773737337f23de254d", // Your project ID
        "647905e0a9f44dd4d1a4", // Your collection ID
        documentId, // Use the generated UUID as the document ID
        newCategory
      );

      console.log("Recipe created:", response);
      navigate("/shopping");
      return response; // Optionally, return the created recipe document
    } catch (error) {
      console.error("Error creating recipe:", error);
      throw error;
    }
  };

  const saveShoppingList = async (formData) => {
    try {
      const collectionId = "64773737337f23de254d"; // Replace with your actual collection ID
      const document = await databases.createDocument(collectionId, formData);

      console.log("Shopping list created:", document);
      setShowSuccessMessage(true);
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
            required
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
            // required
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
                required
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
      <div>
        {showSuccessMessage && (
          <div className="success-message">Shopping list saved</div>
        )}

        {/* Use Link component to navigate to /shopping */}
        <Link to="/shopping"></Link>

        <button onClick={saveShoppingList}></button>
      </div>
    </div>
  );
};

export default AddShoppingCategory;
