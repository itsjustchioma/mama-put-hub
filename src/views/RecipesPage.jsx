import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import starRating from "/assets/preference.png";
import emptyBookmarkIcon from "/public/assets/emptybookmark.png";
import fullBookmarkIcon from "/public/assets/fullbookmark.png";
import { useNavigate } from "react-router-dom";
import Tags from "../components/Tags";
import Header from "../components/Header";
import { databases, account } from "../services/appwriteConfig";
import RecipeDirection from "./RecipeDirection";
import { v4 as uuidv4 } from "uuid";
import { saveBookmark } from "../services/appwriteConfig";

export default function RecipesPage(props) {
  const [bookmarkStatus, setBookmarkStatus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);

  const userId = account.get();
  const navigate = useNavigate();

  const handleTagClick = (tag) => {
    let filteredRecipes = [];

    if (tag.name === "All") {
      // If "All" tag is selected, display all recipes
      filteredRecipes = recipes;
    } else {
      // Filter recipes based on the selected tag
      filteredRecipes = recipes.filter((recipe) =>
        recipe.tags.includes(tag.name)
      );
    }

    setRecipes(filteredRecipes);
    setCurrentPage(1); // Reset current page to 1
  };

  console.log(recipes.username);
  console.log(recipes);




  const handleBookMarkClick = async (index) => {
    try {
      const recipe = recipes[index];
      const { author, food_name } = recipe;
    console.log(recipe);
  
      const documentId = uuidv4(); // Generate a unique document ID
      const savedRecipe = await saveBookmark({
        userId: (await userId).$id,
        level: recipe.level,
        type: recipe.type,
        food_name: food_name,
        time: recipe.time ? recipe.time.toString().slice(0, 17) : "",
        servings: recipe.servings,
        author: author,
        steps: recipe.steps,
        rating: recipe.rating ? recipe.rating.toString().slice(0, 11) : "",
        ingredients: recipe.ingredients,
      });
  
      console.log("Recipe saved:", savedRecipe);
      // Optionally, you can do something with the saved recipe, such as displaying a success message
    } catch (error) {
      // Handle the error, such as displaying an error message
      console.error("Error saving recipe:", error);
    }
  };
  

  const handleImageClick = (recipe, index) => {
    navigate(`/ViewDish/${index}`, {
      state: {
        selectedImage: recipe,
        array: displayedRecipes,
      },
    });
  };

  useEffect(() => {
    let promise = databases.listDocuments(
      "64773737337f23de254d",
      "647b9e24d59661e7bfbe",
      []
    );

    promise.then(
      function (response) {
        console.log(response);
        const updatedRecipes = response.documents.map((recipe) => ({
          ...recipe,
          tags: getTagsForRecipe(recipe),
        }));
        setRecipes(updatedRecipes);
        setBookmarkStatus(Array(updatedRecipes.length).fill(false));
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const getTagsForRecipe = (recipe) => {
    const tags = [];

    if (recipe.type && recipe.type.includes("Dessert")) {
      tags.push("Dessert");
    }
    if (recipe.type && recipe.type.includes("Breakfast")) {
      tags.push("Breakfast");
    }
    if (recipe.type && recipe.type.includes("Lunch")) {
      tags.push("Lunch");
    }
    if (recipe.type && recipe.type.includes("Salad")) {
      tags.push("Salad");
    }
    // Add more conditions for other tags

    // If you want to include all as a tag
    tags.push("All");

    return tags;
  };

  const itemsPerPage = 6;
  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedRecipes = recipes.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-[90%] mx-auto  h-[90vh] overflow-scroll no-scrollbar">
      <Header />
      <Tags onTagClick={handleTagClick} />      <h1 className="text-4xl text-center font-extrabold">Recipe Page</h1>

      <h1 className="text-xl font-semibold">{props.title}</h1>

      <div className="carousel overflow-x-scroll no-scrollbar m-auto ">
        <div className="inner-carousel  flex flex-wrap  justify-center  ">
          {displayedRecipes.map((recipe, index) => (
            <div className="item w-64 h-[22rem]" key={index}>
              <div className="w-64 h-64 object-center p-4 pl-4 relative cursor-pointer top-0">
                <button className="absolute right-5" onClick={() => handleBookMarkClick(index)}>
                  <img
                    src={bookmarkStatus[index] ? fullBookmarkIcon : emptyBookmarkIcon}
                    className="w-5 my-2"
                    alt="bookmark"
                  />
                </button>
                <img
                  src={recipe.imageURL}
                  className="rounded-md bg-slate-200 h-full w-full"
                  alt=""
                  onClick={() => handleImageClick(recipe, index)}
                />
                <Link to={`/ViewDish/${index}`}>
                  <div className=" mt-2 ">
                    <h5 className="text-[14px] font-semibold">{recipe.name}</h5>
                    <p className="flex items-center text-[14px]">
                      {recipe.rating}
                    </p>
                    <p className="text-[14px]">{recipe.type}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 mb-24">
        {currentPage > 1 && (
          <button className="mx-2" onClick={goToPreviousPage}>
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button className="mx-2" onClick={goToNextPage}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
