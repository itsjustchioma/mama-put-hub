import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import starRating from "/assets/preference.png";
import emptyBookmarkIcon from "/assets/emptybookmark.png";
import fullBookmarkIcon from "/assets/fullbookmark.png";
import { databases } from "../services/appwriteConfig";
import { saveBookmark } from "../services/appwriteConfig";
import { v4 as uuidv4 } from "uuid";
import { account } from "../services/appwriteConfig";

export default function ImageCarouselFrame(props) {
  const [bookmarkStatus, setBookmarkStatus] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = (index) => {
    const selectedDish = carouselItems[index];
    navigate(`/ViewDish/${index}`, {
      state: { dish: selectedDish, array: carouselItems },
    });
  };


  

  useEffect(() => {
    let promise = databases.listDocuments(
      "64773737337f23de254d",
      "647905d239ca167a89f1",
      []
    );

    promise.then(
      function (response) {
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

  // const bookmarkMessage = bookmarkStatus[index]
  //   ? "Recipe saved!"
  //   : "Recipe unsaved";

  return (
    <div className="">
      <h1 className="text-xl font-semibold">{props.title}</h1>

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
                    
                      <p className="text-[14px]">{item.type}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
      <Link to={"/RecipesPage"}>
        <button className="-mt-4 mb-5 ml-4 bg-laurel-green p-2 text-[10px] rounded-full">
          View More
        </button>
      </Link>

      {showModal && (
        <div className="fixed bottom-5 right-5 bg-white p-2 rounded-md shadow-md">
          <p className="text-sm text-gray-800">Recipe saved!</p>
        </div>
      )}
    </div>
  );
}
