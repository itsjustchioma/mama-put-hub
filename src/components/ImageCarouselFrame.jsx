import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import starRating from "/assets/preference.png";
import emptyBookmarkIcon from "/public/assets/emptybookmark.png";
import fullBookmarkIcon from "/public/assets/fullbookmark.png";
import { databases } from "../services/appwriteConfig";
import { saveBookmark } from "../services/appwriteConfig";
import { v4 as uuidv4 } from "uuid";
import { account } from "../services/appwriteConfig";

export default function ImageCarouselFrame(props) {
  const [bookmarkStatus, setBookmarkStatus] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);
  const navigate = useNavigate();

  const handleImageClick = (index) => {
    navigate(`/ViewDish/${index}`, { state: { dish: carouselItems[index] } });
  };

  useEffect(() => {
    let promise = databases.listDocuments(
      "64773737337f23de254d",
      "647905d239ca167a89f1",
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

const handleBookMarkClick = async (index) => {
  try {
    const recipe = carouselItems[index];

    const documentId = uuidv4(); // Generate a unique document ID
    const savedRecipe = await saveBookmark({
      userId: (await userId).$id,
      level: recipe.level,
      type: recipe.type,
      food_name: recipe.food_name,
      time: recipe.time.toString().slice(0, 17),
      servings: recipe.servings,
      author: recipe.author,
      steps: recipe.steps,
      rating: recipe.rating.toString().slice(0, 11),
      ingredients: recipe.ingredients,
    });

    console.log("Recipe saved:", savedRecipe);
    // Optionally, you can do something with the saved recipe, such as displaying a success message
  } catch (error) {
    // Handle the error, such as displaying an error message
    console.error("Error saving recipe:", error);
  }
};


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
                    src={item.imageURL}
                    className="rounded-md bg-slate-200 h-full w-full"
                    alt=""
                    onClick={() => handleImageClick(index)}
                  />
                  <Link to={`/ViewDish/${index}`}>
                    <div className=" mt-2 ">
                      <h5 className="text-[14px] font-semibold">
                        {item.food_name}
                      </h5>
                      <p className="flex items-center text-[14px]">
                        <img src={starRating} className="w-4 f" alt="rating" />
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
      <Link to={"/RecipesPage"}>
        <button className="-mt-4 mb-5 ml-4 bg-laurel-green p-2 text-[10px] rounded-full">
          view more
        </button>
      </Link>
    </div>
  );
}
