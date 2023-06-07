import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddShopping from "/assets/right arrow.png";
import { databases, account } from "../../services/appwriteConfig.js";

function ShoppingCategory() {
  const [createdShoppings, setCreatedShoppings] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchShoppingCategories = async () => {
      try {
        const response = await account.get(); // Get the logged-in user's ID
        const userId = response.$id;
        setUserId(userId);
        filterShoppingCategoriesByUserId(userId);
      } catch (error) {
        console.log(error);
      }
    };

    fetchShoppingCategories();
  }, []);

  useEffect(() => {
    const fetchShoppingCategories = async () => {
      try {
        const response = await databases.listDocuments(
          "64773737337f23de254d", // Your collection ID
          "647905e0a9f44dd4d1a4", // Your collection permission ID
          []
        );
        console.log(response);

        setCreatedShoppings(response.documents);
      } catch (error) {
        console.log(error);
      }
    };

    fetchShoppingCategories();
  }, []);

  const filterShoppingCategoriesByUserId = async (userId) => {
    try {
      const response = await databases.listDocuments(
        "64773737337f23de254d",
        "647905e0a9f44dd4d1a4",
        []
      );
      console.log(response);

      const filteredCategories = response.documents.filter(
        (category) => category.userId === userId
      );

      setCreatedShoppings(filteredCategories);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-2 md:mt-12 md:ml-24 ml-16">
      {createdShoppings.length === 0 ? ( // Check if there are no categories
        <p className="text-copper-orange italic ">Create a shopping list.</p>
      ) : (
        createdShoppings.map((category) => (
          <div
            key={category.$id}
            className={`bg-${category.color} rounded-lg p-4 m-15 relative h-32`}
            style={{
              borderTopLeftRadius: "50px",
              borderBottomLeftRadius: "50px",
              margin: "10px",
            }}
          >
            <div className="flex flex-wrap items-center">
              <div>
                <img
                  src={category.picture}
                  alt="Category"
                  className="w-14 h-14 rounded-lg dark:bg-gray-500 dark:border-gray-700 p-1 md:w-24 md:h-24 md:ml-6 ml-4"
                />
              </div>
              <div className="md:ml-8 ml-6 text-sm md:text-lg">
                <p className="text-md md:text-xl font-semibold">
                  {category.category_name}
                </p>
                <div>
                  <ul>{category.ingredients.length} ingredients.</ul>
                </div>
              </div>
              <div className="ml-auto">
                <Link to={`/SavedRecipe/${category.$id}`}>
                  {" "}
                  {/* Pass the document ID */}
                  <button>
                    <img src={AddShopping} alt="right arrow" className="w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ShoppingCategory;
