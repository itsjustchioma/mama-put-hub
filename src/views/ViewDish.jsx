import React from "react";
import { useParams } from "react-router-dom";
import CarouselImageGallery from "../components/CarouselImageGallery";
import starRating from "/assets/preference.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  return (
    <div className="h-[90vh] overflow-scroll no-scrollbar md:h-[100vh] md:w-5/6  mx-auto">
      <div className="p-4">
        <div className="flex justify-between pb-4">
        <BackArrow onClick={handleBackClick} />

<img src={fullBookmarkIcon} className="w-4" alt="" />
        </div>
        {dish ? (
          <div>
            <div className="h-72 md:h-2/4">
              <img
                src={dish.imageURL}
                alt={dish.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-scroll   meda  overscroll-contain  -mt-3">
              <div className=" bg-copper-orange inset-0 p-4 rounded-t-3xl  overflow-y-auto overscroll-contain">
                <h1 className="text-2xl text-center font-medium">{dish.name}</h1>

                <div className="flex justify-center justify-evenly mt-4 flex-wrap">
                  <span className="flex items-center  ">
                    {" "}
                    <img src={starRating} className="w-4" alt="" />{" "}
                    {dish.rating}
                 
               
                  </span>
                  <p className="uppercase"> {dish.level}</p>
                  <p> {dish.time} min</p>
                  <p>Servings: {dish.servings}</p>
                  <span className="text-sm text-cyan-400"> 
                  <Link>
                    25 reviews
                    </Link>
                    </span>
                </div>
                
                <div className="mt-4">
                  <h1 className="text-2xl font-medium">Ingredients</h1>
                  <ul>
                    {dish.ingredients.map((ingredients, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{ingredients.name}</span>
                        <span>{ingredients.quantity}</span>
                      </li>
                    ))}
                  </ul>
                  
                </div>
                <Button title="Show directions"/>

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
