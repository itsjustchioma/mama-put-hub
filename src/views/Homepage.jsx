import React, { useState, useEffect } from "react";
import { shuffle } from "lodash"; // Import the shuffle function from the lodash library

import Navigation from "../components/Navigation/Navigation";
import ImageCarouselFrame from "../components/ImageCarouselFrame";
import SideBarNavigation from "../components/Navigation/SideBarNavigation";
import { account, databases } from "../services/appwriteConfig";
import emptyBookmarkIcon from "/assets/emptybookmark.png";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { saveBookmark } from "../services/appwriteConfig";
import fullBookmarkIcon from "/assets/fullbookmark.png";

import "../index.css";

import WelcomeFrame from "../components/WelcomeFrame";

const Homepage = (props) => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [bookmarkStatus, setBookmarkStatus] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

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

  useEffect(() => {
    let promise = databases.listDocuments(
      "64773737337f23de254d",
      "647b9e24d59661e7bfbe",
      []
    );

    promise.then(
      function (response) {
        const randomizedItems = shuffle(response.documents); // Randomize the order of documents
        setCarouselItems(randomizedItems);
        setBookmarkStatus(Array(response.documents.length).fill(false));
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleImageClick = (index) => {
    const selectedDish = carouselItems[index];
    navigate(`/ViewDish/${index}`, {
      state: { dish: selectedDish, array: carouselItems },
    });
  };

  const handleBookMarkClick = async (index) => {
    try {
      const recipe = carouselItems[index];

      const documentId = uuidv4(); // Generate a unique document ID
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

      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
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
              {carouselItems.map((item, index) =>
                index < 5 ? (
                  <div className="item w-64 h-64" key={index}>
                    <div className="w-64 h-64 object-center p-4 pl-4 relative cursor-pointer top-0">
                      <button className="absolute right-5">
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
                      <img
                        src={item.picture}
                        className="rounded-md bg-slate-200 h-full w-full"
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
       
        </div>
      </div>
    </div>
  );
};

export default Homepage;
