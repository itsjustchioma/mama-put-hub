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

export default function YourLibrary() {
  const [carouselItems, setCarouselItems] = useState([]);
  const navigate = useNavigate();

  const handleBookmark = async (recipe) => {
    try {
      const savedRecipe = await saveBookmark(recipe);
      // Optionally, you can do something with the saved recipe, such as displaying a success message
      console.log("Recipe saved:", savedRecipe);
    } catch (error) {
      // Handle the error, such as displaying an error message
      console.error("Error saving recipe:", error);
    }
  };

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await databases.listDocuments(
          "64773737337f23de254d",
          "6479a9441b13f7a9ad4d",
          []
        );
        console.log(response);
        setCarouselItems(response.documents);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSavedRecipes();
  }, []);

  const handleImageClick = (item, index) => {
    navigate(`/ViewDish/${index}`, {
      state: {
        selectedImage: item,
        array: carouselItems,
      },
    });
  };

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
                          {item.name}
                        </h5>
                        <p className="flex items-center text-[14px]">
                          <img
                            src={starRating}
                            className="w-4"
                            alt="rating"
                          />
                          : {item.rating}
                        </p>
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
                    <div className="w-64 h-64 object-center p-4 pl-4 relative cursor-pointer top-0 ">
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
      </div>
    </div>
  );
}
