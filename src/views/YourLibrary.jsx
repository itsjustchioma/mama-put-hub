import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { databases } from "../services/appwriteConfig";
import fullBookmarkIcon from "/public/assets/fullbookmark.png";
import { motion } from "framer-motion";
import starRating from "/assets/preference.png";
import CarouselISavedRecipe from "../components/CarouselImageGallery";
import { saveBookmark } from "../services/appwriteConfig";
import { account } from "../services/appwriteConfig";
import plusSign from "/public/assets/plus1.png";

export default function YourLibrary() {

  // THE LIBRARY VIEW SAVES RECIPES AND CREATES RECIPES

  // State variables
  const [carouselItems, setCarouselItems] = useState([]);
  const [createdrecipes, setcreatedrecipes] = useState([]);

  const [userId, setUserId] = useState(""); // Added userId state
  const navigate = useNavigate();







   // Fetch saved recipes from the database
  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await databases.listDocuments(
          "64773737337f23de254d",
          "6479a9441b13f7a9ad4d",
          []
        );
        setCarouselItems(response.documents);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSavedRecipes();
  }, []);


  // Function to handle bookmarking a recipe
  const handleBookmark = async (recipe) => {
    try {
      const savedRecipe = await saveBookmark(recipe);
      console.log("Recipe saved:", savedRecipe);
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };

  // Function to handle image click and navigate to a recipe detail page
  const handleImageClick = (item, index) => {
    navigate(`/ViewDish/${index}`, {
      state: {
        selectedImage: item,
        array: carouselItems,
      },
    });
  };

  const handleImageClicks = (item, index) => {
    navigate(`/ViewDish/${index}`, {
      state: {
        selectedImage: item,
        array: createdrecipes,
      },
    });
  };



    // Function to filter saved recipes by user ID
  const filterRecipesByUserId = async (userId) => {
    try {
      const response = await databases.listDocuments(
        "64773737337f23de254d",
        "6479a9441b13f7a9ad4d",
        []
      );

      const filteredRecipes = response.documents.filter(
        (recipe) => recipe.userId === userId
      );

      setCarouselItems(filteredRecipes);
    } catch (error) {
      console.log(error);
    }
  };


  // Function to filter user's own recipes by user ID
  const filterRecipesByUserID = async (userId) => {
    try {
      const response = await databases.listDocuments(
        "64773737337f23de254d",
        "647b9e24d59661e7bfbe",
        []
      );

      const filteredRecipes = response.documents.filter(
        (recipe) => recipe.userId === userId
      );

      setcreatedrecipes(filteredRecipes);
    } catch (error) {
      console.log(error);
    }
  };

    // Fetches the userId and filter created recipes by userId when the component mounts
  useEffect(() => {
    const userIdPromise = account.get();

    userIdPromise.then(
      (response) => {
        const userId = response.$id;
        setUserId(userId); // Set the userId state
        filterRecipesByUserId(userId);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    const userIdPromise = account.get();

    userIdPromise.then(
      (response) => {
        const userId = response.$id;
        setUserId(userId); // Set the userId state
        filterRecipesByUserID(userId);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="overflow-scroll h-[93vh] no-scrollbar">
      <div className="m-4 w-5/6 mx-auto md:h-100vh ">
        <Header />
        <h1 className="text-xl font-semibold">Saved Recipes</h1>
        {carouselItems.length === 0 ? (
          <p>No saved recipes</p>
        ) : (
          <motion.div className="carousel overflow-scroll no-scrollbar m-auto h-80 mb-">
            <motion.div className="inner-carousel flex justify-start">
              {carouselItems.map((item, index) => (
                <motion.div className="item w-64 h-64" key={index}>
                  <div className="w-64 h-64 object-center p-4 pl-4 relative cursor-pointer top-0">
                    <button className="absolute right-5">
                      <img
                        src={fullBookmarkIcon}
                        className="w-5 my-2"
                        alt="bookmark"
                      />
                    </button>
                    <img
                      src={item.imageURL}
                      className="rounded-md h-full w-full"
                      alt=""
                      onClick={() => handleImageClick(item, index)}
                    />
                    <Link to={`/ViewDish/${index}`}>
                      <div className="mt-2">
                        <h5 className="text-[14px] font-semibold">
                          {item.food_name}
                        </h5>
                        <p className="flex items-center text-[14px]">
                          <img src={starRating} className="w-4" alt="rating" />:{" "}
                          {item.rating}
                        </p>
                        <p className="text-[14px]">{item.type}</p>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        <h1 className="text-xl font-semibold">My Recipes</h1>
        <motion.div className="carousel overflow-scroll no-scrollbar m-auto h-80 mb-">
          <motion.div className="inner-carousel flex justify-start  ">
            {CarouselISavedRecipe.CarouselISavedRecipe.map((item, index) => (
              <motion.div className="item w-64 h-64" key={index}>
                {index === 0 ? ( // Render the link only for the first item
                  <Link to="/NewRecipe">
                    <div className="w-64 h-64 object-center p-4 pl-4 relative cursor-pointer top-0 ">
                      <div className="h-full bg-slate-400">
                        <img
                          src={item.imageURL}
                          className="rounded-md  w-10 h-10 flex items-center mx-auto absolute top-[40%] left-[40%] "
                          alt=""
                        />
                      </div>
                      <div className=" mt-2 ">
                        <h5 className="text-[14px] font-semibold">
                          {item.name}
                        </h5>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div>
                    {/* Render other items without the link */}
                    <div className="  w-64 h-64 object-center p-4 pl-4 relative cursor-pointer top-0 ">
                      <button className="absolute right-5 ">
                        <img
                          src={fullBookmarkIcon}
                          className="w-5 my-2"
                          alt="bookmark"
                        />
                      </button>
                      <img
                        src={item.imageURL}
                        className="rounded-md h-full w-full  "
                        alt=""
                        onClick={() => {
                          handleImageClick(item, index);
                        }}
                      />
                      <Link to={`/ViewDish/${index}`}>
                        <div className=" mt-2 ">
                          <h5 className="text-[14px] font-semibold">
                            {item.name}
                          </h5>
                          <p className="flex items-center text-[14px]">
                            <img
                              src={starRating}
                              className="w-4 f"
                              alt="rating"
                            />
                            : {item.rating}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="carousel overflow-scroll no-scrollbar m-auto h-80 mb-">
          <motion.div className="inner-carousel flex justify-start  ">
            {createdrecipes.map((item, index) => (
              <motion.div className="item w-64 h-64" key={index}>
                <div className="w-64 h-64 object-center p-4 pl-4 relative cursor-pointer top-0">
                  <button className="absolute right-5">
                    <img
                      src={fullBookmarkIcon}
                      className="w-5 my-2"
                      alt="bookmark"
                    />
                  </button>
                  <img
                    src={item.imageURL}
                    className="rounded-md h-full w-full"
                    alt=""
                    onClick={() => handleImageClicks(item, index)}
                  />
                  <Link to={`/ViewDish/${index}`}>
                    <div className="mt-2">
                      <h5 className="text-[14px] font-semibold">
                        {item.name}
                      </h5>
                      <p className="flex items-center text-[14px]">
                        {/* <img
                            src={starRating}
                            className="w-4"
                            alt="rating"
                          /> */}
                        {item.level}
                      </p>
                      <p className="text-[14px]">{item.type}</p>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
