import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emptyBookmarkIcon from "/assets/emptybookmark.png";
import fullBookmarkIcon from "/assets/fullbookmark.png";
import { useNavigate } from "react-router-dom";
import Tags from "../components/Tags";
import Header from "../components/Header";
import { databases, account } from "../services/appwriteConfig";
import { saveBookmark } from "../services/appwriteConfig";

export default function RecipesPage(props) {
  // State variables
  const [bookmarkStatus, setBookmarkStatus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState(null);
  const [originalRecipes, setOriginalRecipes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const userId = account.get();
  const navigate = useNavigate();

  const carouselItems = location.state?.array;
  const dish = carouselItems && carouselItems[id];

  console.log(dish);

  // Function to handle tag click
  const handleTagClick = (tag) => {
    setCurrentPage(1); // Reset current page to 1
    setActiveTag(tag); // Update the active tag

    let filteredRecipes = [];
    if (tag.name === "All") {
      // If "All" tag is selected, display all recipes
      filteredRecipes = originalRecipes;
    } else {
      // Filter recipes based on the selected tag
      filteredRecipes = originalRecipes.filter((recipe) =>
        recipe.tags.includes(tag.name)
      );
    }

    setRecipes(filteredRecipes);
  };

  // Function to handle bookmark click
  const handleBookMarkClick = async (index) => {
    try {
      const recipe = recipes[index];
      const recipeDocument = await databases.getDocument(
        "64773737337f23de254d",
        "647b9e24d59661e7bfbe",
        recipe.$id
      );

      const username = recipeDocument.username;
      console.log(username);

      const savedRecipe = await saveBookmark({
        userId: (await userId).$id,
        level: recipe.level,
        type: recipe.type,
        description: recipe.description,
        food_name: recipe.name,
        time: recipe.time ? recipe.time.toString().slice(0, 17) : "",
        servings: recipe.servings,
        author: recipe.author,
        username: username, // Update the username here
        steps: recipe.steps,
        rating: recipe.rating ? recipe.rating.toString().slice(0, 11) : "",
        ingredients: recipe.ingredients,
        picture: recipe.picture,
      });

      console.log("Recipe saved:", savedRecipe);
      setShowSuccessModal(true);

      // Hide the success modal after 2 seconds
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 2000);
    } catch (error) {
      // Handle the error, such as displaying an error message
      console.error("Error saving recipe:", error);
    }
  };

  // Function to handle image click and navigate to recipe detail page
  const handleImageClick = (recipe, index) => {
    navigate(`/ViewDish/${index}`, {
      state: {
        selectedImage: recipe,
        array: displayedRecipes,
      },
    });
  };

  const handleImageClicks = (recipe, index) => {
    navigate(`/ViewDish/${index}`, {
      state: {
        selectedImage: recipe,
        array: searchResults,
      },
    });
  };

  // useEffect(() => {
  //     // Fetch recipes from the database
  //   let promise = databases.listDocuments(
  //     "64773737337f23de254d",
  //     "647b9e24d59661e7bfbe",
  //     []
  //   );

  //   promise.then(
  //     function (response) {
  //       console.log(response);
  //       const updatedRecipes = response.documents.map((recipe) => ({
  //         ...recipe,
  //         tags: getTagsForRecipe(recipe),
  //       }));
  //       setRecipes(updatedRecipes);
  //       setOriginalRecipes(updatedRecipes);
  //       setBookmarkStatus(Array(updatedRecipes.length).fill(false));
  //     },
  //     function (error) {
  //       console.log(error);
  //     }
  //   );
  // }, []);

  useEffect(() => {
    // Fetch recipes from the database
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
        setOriginalRecipes(updatedRecipes);
        setBookmarkStatus(Array(updatedRecipes.length).fill(false));
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  // Function to get tags for a recipe
  const getTagsForRecipe = (recipe) => {
    const tags = [];

    if (recipe.type && recipe.type.includes("Breakfast")) {
      tags.push("Breakfast");
    }
    if (recipe.type && recipe.type.includes("Brunch")) {
      tags.push("Brunch");
    }
    if (recipe.type && recipe.type.includes("Lunch")) {
      tags.push("Lunch");
    }
    if (recipe.type && recipe.type.includes("Dinner")) {
      tags.push("Dinner");
    }
    if (recipe.type && recipe.type.includes("Diary")) {
      tags.push("Diary");
    }
    if (recipe.type && recipe.type.includes("Snacks")) {
      tags.push("Snacks");
    }
    if (recipe.type && recipe.type.includes("Appetizers")) {
      tags.push("Appetizers");
    }
    if (recipe.type && recipe.type.includes("Salad")) {
      tags.push("Salad");
    }
    if (recipe.type && recipe.type.includes("Soups")) {
      tags.push("Soups");
    }
    if (recipe.type && recipe.type.includes("Pasta and Noodles")) {
      tags.push("Pasta and Noodles");
    }
    if (recipe.type && recipe.type.includes("Dessert")) {
      tags.push("Dessert");
    }

    tags.push("All");

    return tags;
  };

  // Pagination variables
  const itemsPerPage = 6;
  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedRecipes = recipes.slice(startIndex, endIndex);

  // Function to navigate to previous page
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Function to navigate to next pagen
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // console.log(displayedRecipes);

  console.log(searchResults);
  const handleSearchResultsChange = (results) => {
    setSearchResults(results);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setCurrentPage(1); // Reset current page to 1

    if (searchTerm === "") {
      // If the search term is empty, display all recipes
      setIsSearching(false);
      setSearchResults([]);
      setRecipes(originalRecipes);
    } else {
      // Filter recipes based on the search term
      setIsSearching(true);
      const results = originalRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
      setRecipes(results);
    }
  };

  return (
    <div className="w-[90%] mx-auto h-[94vh] pb-10 overflow-scroll no-scrollbar">
      <Header onSearchResultsChange={handleSearchResultsChange} />

      <Tags activeTag={activeTag} onTagClick={handleTagClick} />
      <br />
      <h1 className="text-4xl text-center font-extrabold">Explore</h1>

      {searchResults.length > 0 && (
        <div className="carousel overflow-x-scroll no-scrollbar m-auto">
          <div className="text-center font-medium text-lg text-copper-orange">
            <h1>({searchResults.length}) Recipes found</h1>
          </div>

          <div className="inner-carousel flex flex-wrap justify-center">
            {searchResults.map((recipe, index) => (
              <div key={index}>
                <div className="item w-64 h-[22rem]" key={index}>
                  <div className="w-64 h-64 object-center p-4 pl-4 relative cursor-pointer top-0">
                    <button
                      className="absolute right-5"
                      onClick={() => handleBookMarkClick(index)}
                    >
                      <img
                        src={
                          bookmarkStatus[index]
                            ? fullBookmarkIcon
                            : emptyBookmarkIcon
                        }
                        className="w-5 my-2"
                        alt="bookmark"
                      />
                    </button>
                    <img
                      src={recipe.picture}
                      className="rounded-md bg-slate-200 h-full w-full"
                      alt=""
                      onClick={() => handleImageClicks(recipe, index)}
                    />
                    <Link to={`/ViewDish/${index}`}>
                      <div className="mt-2">
                        <h5 className="text-[14px] font-semibold">
                          {recipe.name}
                        </h5>
                        <p className="flex items-center text-[14px]">
                          {recipe.rating}
                        </p>
                        <p className="text-[14px]">{recipe.type}</p>
                        <p className="text-[14px]">
                          {recipe.time
                            ? recipe.time.toString().slice(0, 17)
                            : ""}
                        </p>
                        <p className="text-[14px]">
                          {recipe.servings} servings
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">You Might Like These Recipes</h1>
          </div>
        </div>
      )}
      <h1 className="text-xl font-semibold">{props.title}</h1>

      <div className="carousel overflow-x-scroll no-scrollbar m-auto">
        <div className="inner-carousel flex flex-wrap justify-center">
          {displayedRecipes.map((recipe, index) => (
            <div className="item w-64 h-[22rem]" key={index}>
              <div className="w-64 h-64 object-center p-4 pl-4 relative cursor-pointer top-0">
                <button
                  className="absolute right-5"
                  onClick={() => handleBookMarkClick(index)}
                >
                  <img
                    src={
                      bookmarkStatus[index]
                        ? fullBookmarkIcon
                        : emptyBookmarkIcon
                    }
                    className="w-5 my-2"
                    alt="bookmark"
                  />
                </button>
                <img
                  src={recipe.picture}
                  className="rounded-md bg-slate-200 h-full w-full"
                  alt=""
                  onClick={() => handleImageClick(recipe, index)}
                />
                <Link to={`/ViewDish/${index}`}>
                  <div className="mt-2">
                    <h5 className="text-[14px] font-semibold">{recipe.name}</h5>
                    <p className="flex items-center text-[14px]">
                      {recipe.rating}
                    </p>
                    <p className="text-[14px]">{recipe.type}</p>
                    <p className="text-[14px]">
                      {recipe.time ? recipe.time.toString().slice(0, 17) : ""}
                    </p>
                    <p className="text-[14px]">{recipe.servings} servings</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 rounded-md ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
          onClick={goToPreviousPage}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === totalPages}
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
