import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import BackArrow from "../components/BackClick/BackArrow";
import leftArrow from "/assets/left arrow.png";
import rightArrow from "/assets/right arrow.png";

export default function RecipeDirection() {
  const { id } = useParams();
  const location = useLocation();
  const dish = location.state?.dish;

  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();



 

  const moveToNextStep = () => {
    if (currentStep < dish.steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      navigate("/alldone");
    }
  };

  const moveToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="h-[90vh] overflow-scroll no-scrollbar md:h-[100vh] md:w-5/6 mx-auto">
      <div className="p-4">
        <div className="flex justify-between pb-4">
          <BackArrow onClick={handleBackClick} />
        </div>
        {dish ? (
          <div>
            <div className="h-64 md:h-2/4">
              <div className="flex justify-between flex-wrap">
                <h1 className="text-2xl text-center font-medium">
                  How to cook {dish.food_name} {dish.name}
                </h1>
              </div>
              <div className="h-64 justify-center mx-auto text-center">
                <img
                  src={dish.picture}
                  alt={dish.name}
                  className="rounded-full h-full w-64 mx-auto object-cover"
                />
              </div>
            </div>
            <div className="mt-28">
              <h1 className="text-2xl font-medium">Steps</h1>
              <div>
                <p>{dish.steps[currentStep]}</p>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  className="border-black border p-2 w-10 rounded-2xl bg-copper-orange"
                  onClick={moveToPreviousStep}
                  disabled={currentStep === 0}
                >
                  <img src={leftArrow} alt="" />
                </button>
                <button
                  className="border-black border p-2 w-10 rounded-2xl bg-copper-orange"
                  onClick={moveToNextStep}
                  disabled={currentStep === dish.steps.length - 1}
                >
                  <img src={rightArrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>No dish found.</p>
        )}
      </div>
    </div>
  );
}
