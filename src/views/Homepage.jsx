import React, { useState, useEffect } from "react";
import { shuffle } from "lodash"; // Import the shuffle function from the lodash library

import ImageCarouselFrame from "../components/ImageCarouselFrame";
import { account, databases } from "../services/appwriteConfig";
import emptyBookmarkIcon from "/assets/emptybookmark.png";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { saveBookmark } from "../services/appwriteConfig";
import fullBookmarkIcon from "/assets/fullbookmark.png";

import "../index.css";

import WelcomeFrame from "../components/WelcomeFrame";

const Homepage = (props) => {
  // Define state variables using the useState hook


  const [carouselItems, setCarouselItems] = useState([]); // Holds the items for the image carousel

  const [showSavedModal, setShowSavedModal] = useState(false);

  const [bookmarkStatus, setBookmarkStatus] = useState([]); // Holds the bookmark status for each item by saving it to users library


  const [showModal, setShowModal] = useState(false); // Controls the visibility of a modal

  const navigate = useNavigate(); // Provides navigation functionality

  const userId = account.get(); // Retrieves the user ID from the account service

  userId.then(
    function (response) {
      console.log(response);
      console.log(response.$id);
    },
    function (error) {
      console.log(error);
    }
  );

  // Fetches the recipes items and initialize the bookmark status when the component mounts
  useEffect(() => {
    let promise = databases.listDocuments(
      "64773737337f23de254d",
      "647b9e24d59661e7bfbe",
      []
    );

    promise.then(
      function (response) {
        const randomizedItems = shuffle(response.documents); // Randomize the order of recipes using lodash's shuffle function


        setCarouselItems(randomizedItems); // Update the carousel items state


        setBookmarkStatus(Array(response.documents.length).fill(false)); // Initialize the bookmark status with an array of false values
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  // Handle click on an image in the carousel and shows more details about the recipe in viewdish
  const handleImageClick = (index) => {
    const selectedDish = carouselItems[index];
    navigate(`/ViewDish/${index}`, {
      state: { dish: selectedDish, array: carouselItems },
    });
  };

  // Handle click on the bookmark icon
  const handleBookMarkClick = async (index) => {
    try {
      const recipe = carouselItems[index];

      const documentId = uuidv4(); // Generate a unique document ID using uuidv4
      const savedRecipe = await saveBookmark({
        userId: (await userId).$id,
        level: recipe.level,
        type: recipe.type,
        name: recipe.name,
        servings: recipe.servings,
        username: recipe.username,
        steps: recipe.steps,
        description: recipe.description,
        ingredients: recipe.ingredients,
        picture: recipe.picture,
      });

      console.log("Recipe saved:", savedRecipe);

      // Toggle the bookmark status
      const updatedBookmarkStatus = [...bookmarkStatus];
      updatedBookmarkStatus[index] = !updatedBookmarkStatus[index];
      setBookmarkStatus(updatedBookmarkStatus);

      setShowSavedModal(true);

      setTimeout(() => {
        setShowSavedModal(false);
      }, 10000);
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };


  const SavedModal = () => {
    return (
      <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        showModal ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-4 rounded-md shadow-md">
        <p className="text-green-500 font-bold">Recipe Saved!</p>
      </div>
    </div>
    );
  };
  return (
    <div className="bg-background-color h-[94vh] overflow-scroll  m-auto md:h-[100vh] no-scrollbar">
      <div className="w-10/12 mx-auto">
        <WelcomeFrame />

        <ImageCarouselFrame title={"What do you want to eat today?"} />

        <div className=" mb-24">
          <h1 className="text-xl font-semibold">Featured Recipes</h1>
          <div className="carousel overflow-x-scroll no-scrollbar m-auto h-[22rem]">
            <div className="inner-carousel flex justify-start">
              {/* Map through the carousel items and render each item */}
              {carouselItems.map((item, index) =>
                index < 5 ? (
                  <div className="item w-64 h-64" key={index}>
                    <div className="w-64 h-64 object-center p-4 pl-4 relative cursor-pointer top-0">
                      <button className="absolute right-5">
                        {/* Render a bookmark icon based on the bookmark status */}
                        <img
                          src={
                            bookmarkStatus[index]
                              ? fullBookmarkIcon
                              : emptyBookmarkIcon
                          }
                          className="w-5 my-2"
                          alt="bookmark"
                          onClick={() => handleBookMarkClick(index)}
                        />
                      </button>
                      {/* Render the image and its details */}
                      <img
                        src={item.picture}
                        className="rounded-md bg-slate-200 h-full w-full object-center object-cover"
                        alt=""
                        onClick={() => handleImageClick(index)}
                      />
                      <Link to={`/ViewDish/${index}`}>
                        <div className=" mt-2 ">
                          <h5 className="text-[14px] font-semibold">
                            {item.name}
                          </h5>
                          <p className="flex items-center text-[14px]">
                            {item.rating}
                          </p>
                          <p className="text-[14px]">{item.type}</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
          {showSavedModal && <SavedModal />}

        </div>
      </div>
    </div>
  );
};

export default Homepage;
