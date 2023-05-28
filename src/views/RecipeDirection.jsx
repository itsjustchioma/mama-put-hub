import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarouselImageGallery from "../components/CarouselImageGallery";
import starRating from "/assets/preference.png";
import { Link, useNavigate } from "react-router-dom";
import BackArrow from "../components/BackClick/BackArrow";
import fullBookmarkIcon from "/public/assets/fullbookmark.png";
import leftArrow from "/assets/left arrow.png";
import pause from "/assets/pause.png";
import rightArrow from "/assets/right arrow.png";
import unpause from "/public/assets/unpause.png";

export default function RecipeDirection() {
  const { id } = useParams();
  const directions = CarouselImageGallery.CarouselImageGallery[Number(id)];

  const [currentStep, setCurrentStep] = useState(0);
  const [timer, setTimer] = useState(null);
  const [remainingTime, setRemainingTime] = useState("");

  const navigate = useNavigate();

  const startTimer = (time) => {
    if (time > 0) {
      setRemainingTime(time);
      setTimer(
        setInterval(() => {
          setRemainingTime((prevTime) => {
            const remainingSeconds = prevTime - 1;
            if (remainingSeconds <= 0) {
              clearInterval(timer);
              moveToNextStep();
              return "";
            }
            return remainingSeconds;
          });
        }, 1000)
      );
    }
  };

  const pauseTimer = () => {
    clearInterval(timer);
  };

  const moveToNextStep = () => {
    if (currentStep < directions.steps.length - 1) {
      setCurrentStep((prevStep) => {
        const nextStep = prevStep + 1;
        setRemainingTime(directions.steps[nextStep].time);
        return nextStep;
      });
    } else {
      navigate("/alldone");
    }
  };

  const moveToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
      setRemainingTime(directions.steps[currentStep - 1].time);
    }
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  useEffect(() => {
    if (directions) {
      setRemainingTime(directions.steps[currentStep].time);
    }
    return () => {
      clearInterval(timer);
    };
  }, [currentStep, directions, timer]);

  return (
    <div className="h-[90vh] overflow-scroll no-scrollbar md:h-[100vh] md:w-5/6 mx-auto">
      <div className="p-4">
        <div className="flex justify-between pb-4 ">
          <BackArrow onClick={handleBackClick} />
          {/* <img src={""} className="w-4" alt="" /> */}
        </div>
        {directions ? (
          <div>
            <div className="h-64 md:h-2/4">
              <div className="flex justify-between flex-wrap">
                <h1 className="text-2xl text-center font-medium">
                  How to cook {directions.name}
                </h1>
                <p className="bg-lemon-meringue  p-2  rounded-2xl">
                  {directions.time} min
                </p>
              </div>
              <div className="h-64 justify-center mx-auto text-center">
                <p>
                  {remainingTime > 0 ? `${remainingTime} seconds` : "Time up!"}
                </p>
                <img
                  src={directions.imageURL}
                  alt={directions.name}
                  className="rounded-full h-full w-64 mx-auto object-cover"
                />
              </div>
            </div>
            <div className="mt-28">
              <h1 className="text-2xl font-medium">Steps</h1>
              <div>
                
              </div>
              <p>{directions.steps[currentStep].step}</p>
              <div className="flex justify-between  mt-4">
                {timer ? (
                  <button
                    onClick={pauseTimer}
                    className="border-black border w-10 p-2 rounded-2xl bg-copper-orange"
                  >
                    <img src={pause} alt="" />
                  </button>
                ) : (
                  <button
                    className="border-black border w-10 p-2 rounded-2xl  bg-copper-orange"
                    onClick={() =>
                      startTimer(directions.steps[currentStep].time)
                    }
                  >
                    <img src={unpause} alt="" />
                  </button>
                )}
                <button
                  className="border-black border p-2  w-10 rounded-2xl bg-copper-orange"
                  onClick={moveToPreviousStep}
                  disabled={currentStep === 0}
                >
                  <img src={leftArrow} alt="" />
                </button>
                <button
                  className="border-black border p-2  w-10 rounded-2xl bg-copper-orange"
                  onClick={moveToNextStep}
                  disabled={remainingTime === ""}
                >
                  <img src={rightArrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>No directions found.</p>
        )}
      </div>
    </div>
  );
}
