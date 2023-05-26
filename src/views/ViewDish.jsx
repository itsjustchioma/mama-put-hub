import React from "react";
import { useParams } from "react-router-dom";
import CarouselImageGallery from "../components/CarouselImageGallery";
import starRating from "/assets/preference.png";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import fullBookmarkIcon from "/public/assets/fullbookmark.png";
import BackArrow from "../components/BackClick/BackArrow";

const ViewDish = () => {
  const { id } = useParams(); // Retrieve the id (index) from the URL parameter
  const navigate = useNavigate();

  // Get the dish information based on the id (index)
  const dish = CarouselImageGallery.CarouselImageGallery[Number(id)];
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  console.log(dish);


  const handleDirection = (index) => {
    navigate(`/RecipeDirection/${index}`, {
      state: { recipeArray: CarouselImageGallery.CarouselImageGallery }
    });
  };

  return (
    <div className="h-[90vh] overflow-scroll no-scrollbar md:h-[100vh] md:w-5/6  mx-auto">
      <div className="p-4">
        <div className="flex justify-between pb-4">
          <BackArrow onClick={handleBackClick} />
          <img src={fullBookmarkIcon} className="w-4" alt="" />
        </div>
        {dish ? (
          <div>
            <div className="h-72 md:h-[50vh]">
              <img
                src={dish.imageURL}
                alt={dish.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-scroll   meda  overscroll-contain  -mt-3">
              <div className=" bg-copper-orange inset-0 p-4   overflow-y-auto overscroll-contain">
                <h1 className="text-2xl text-center font-medium">{dish.name}</h1>

                <div className="flex  justify-center justify-evenly mt-4 flex-wrap items-center">
                  <span className="flex items-center  text-sm pr-3">
                    <img src={starRating} className="w-10" alt="" />{" "}
                    {dish.rating}
                  </span>
                 
                  <p className="text-sm border-l-2 border-black pl-3 pr-3"> {dish.type}</p>
                  <p className="text-sm border-l-2 border-black pl-3 pr-3"> {dish.level}</p>
                  <p className="text-sm border-l-2 border-black pl-3 pr-3"> {dish.time} min</p>
                  <p className="text-sm border-l-2 border-black pl-3 pr-3">Servings: {dish.servings}</p>
                  <span className="text-sm text-cyan-400  border-l-2 border-black pl-3 pr-3">
                    <Link>25 reviews</Link>
                  </span>
                </div>

                <div className="mt-4">
                  <h1 className="text-xl font-medium">Ingredients</h1>
                  <ul className="text-sm">
                    {dish.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{ingredient.name}</span>
                        <span>{ingredient.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div onClick={() => handleDirection(id)}>
                  <Button title="Show directions" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>No dish found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewDish;
