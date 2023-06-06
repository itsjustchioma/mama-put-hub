import React, { useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import starRating from "/assets/preference.png";
import Button from "../components/Button";
import fullBookmarkIcon from "/public/assets/fullbookmark.png";
import BackArrow from "../components/BackClick/BackArrow";
import CommentSection from "../components/CommentSection";
import { databases } from "../services/appwriteConfig";
import deleteButton from "/assets/delete.png";

const ViewDish = () => {
  const { id } = useParams(); // Retrieves the id (index) from the URL parameter
  const navigate = useNavigate();
  const location = useLocation();

  const carouselItems = location.state?.array;
  const dish = carouselItems && carouselItems[id];

  // Navigates back to the previous page when the back arrow is clicked
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  console.log(carouselItems);

  // Navigates to the recipe directions page for the selected dish
  const handleDirection = () => {
    navigate(`/RecipeDirection/${id}`, { state: { dish: dish } });
  };

  useEffect(() => {
    // Add any additional code you need to fetch and update dish information based on the id (index)
    // Example: fetchDishInfo(id)
  }, [id]);

  const handleConfirmDelete = () => {
    // Perform delete operation in Appwrite database
    const promise = databases.deleteDocument(
      "64773737337f23de254d",
      "6479a9441b13f7a9ad4d",
      dish.$id
    );

    promise.then(
      function (response) {
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    navigate("/YourLibrary");
  };

  const handleConfirmDeleteCreatedRecipe = () => {
    // Perform delete operation in Appwrite database
    const promise = databases.deleteDocument(
      "64773737337f23de254d",
      "647b9e24d59661e7bfbe",
      dish.$id
    );

    promise.then(
      function (response) {
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    navigate("/YourLibrary");
  };

  return (
    <div className="h-[90vh] overflow-scroll no-scrollbar md:h-[100vh] md:w-5/6  mx-auto">
      <div className="p-4">
        <div className="flex justify-between pb-4">
          <BackArrow onClick={handleBackClick} />

          <div onClick={handleConfirmDelete}>
            <img
              src={deleteButton}
              className="w-6 h-6"
              alt=""
              onClick={handleConfirmDeleteCreatedRecipe}
            />
          </div>
        </div>
        {dish ? (
          <div>
            <div className="h-72 md:h-[50vh]">
              <img
                src={dish.picture}
                alt={dish.food_name}
                className="h-full w-full object-scale-down"
              />
            </div>
            <div className="overflow-scroll meda overscroll-contain -mt-3">
              <div className="bg-copper-orange inset-0 p-4 overflow-y-auto overscroll-contain">
                <h1 className="text-2xl text-center font-medium">
                  {dish.food_name}
                </h1>

                <div className="flex justify-center justify-evenly mt-4 flex-wrap items-center">
                  <p className="text-sm  border-black pl-3 pr-3">
                    {" "}
                    Recipe Author: &nbsp;
                    <span className="text-lemon-meringue">
                      <Link to={"/MyProfile"}>
                        {dish.author}
                        {dish.username}
                      </Link>
                    </span>
                  </p>

                  <p className="text-sm border-l-2 border-black pl-3 pr-3">
                    {" "}
                    {dish.type}
                  </p>
                  <p className="text-sm border-l-2 border-black pl-3 pr-3">
                    {" "}
                    {dish.level}
                  </p>
                 
                  <p className="text-sm border-l-2 border-black pl-3 pr-3">
                    Servings: {dish.servings}
                  </p>
               
                </div>

                <div className="mt-4">
                  <div>
                    <h1 className="text-xl font-medium">Description</h1>
                    <p>{dish.description}</p>
                  </div>
                  <br />
                  <br />
                  <h1 className="text-xl font-medium">Ingredients</h1>
                  <ul className="text-sm">
                    {dish.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <br />
              <div onClick={handleDirection}>
                <Button title="Show directions" />
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
