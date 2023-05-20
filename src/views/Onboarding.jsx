import React, { useState } from "react";
import broccoli from "/assets/broccoli.png";
import book from "/assets/guava.png";
import recipebook from "/assets/recipe book.png";
import notes from "/assets/notes.png";
import foodplanner from "/assets/food planner icon.png";
import apron from "/assets/apron.png";
import plate from "/assets/plate.png";
import knife from "/assets/knife.png";
import chefHat from "/assets/chef hat 1.png";

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onNext={handleNext} />;
      case 2:
        return <Step2 onNext={handleNext} onPrevious={handlePrevious} />;
      case 3:
        return <Step3 onPrevious={handlePrevious} />;
      default:
        return null;
    }
  };

  return (
    <div className="justify-center items-center flex mt-40 p-4  md:w-1/2 mx-auto ">
      {renderStep()}
    </div>
  );
}

const Step1 = ({ onNext }) => {
  return (
    <div>
      <img
        src={broccoli}
        className="w-14  translate-x-8  md:-translate-x-40"
        alt=""
      />
      <img
        src={book}
        className="w-14 translate-x-64  md:translate-x-96"
        alt=""
      />

      <img
        src={recipebook}
        className="w-14 translate-y-80 translate-x-64  md:translate-y-96"
        alt=""
      />

      <h2>Step 1</h2>
      <h1 className="text-5xl md:text-6xl">Create Your Personal Cookbook</h1>
      <p className="mt-10  md:text-lg">
        Keep track of your favorite recipes with Cookit. Save and store recipes
        in your recipe cookbook
      </p>
      <button
        onClick={onNext}
        className="p-4  justify-center m-auto  rounded-xl  bg-pastel-blue  mt-4"
      >
        Next
      </button>
    </div>
  );
};

const Step2 = ({ onNext, onPrevious }) => {
  return (
    <div>
      <img
        src={notes}
        className="w-14  translate-x-8 md:-translate-x-40"
        alt=""
      />
      <img
        src={foodplanner}
        className="w-14 translate-x-64 md:translate-x-96"
        alt=""
      />

      <img
        src={apron}
        className="w-14 translate-y-80 translate-x-64 md:translate-y-96"
        alt=""
      />
      <h2>Step 2</h2>
      <h1 className="text-5xl">Shopping List </h1>

      <p className="mt-10">
        You can create your own unique recipes and let Mama Put Hub take care of
        organizing the ingredients you need. Say goodbye to forgetting items at
        the store and simplify your cooking experience with our convenient
        shopping list feature.
      </p>
      <form>{/* Form fields */}</form>
      <button
        onClick={onPrevious}
        className="p-4  justify-center m-auto  rounded-xl  bg-pastel-blue  mt-4 mr-4"
      >
        Previous
      </button>
      <button
        onClick={onNext}
        className="p-4  justify-center m-auto  rounded-xl  bg-pastel-blue  mt-4"
      >
        Next
      </button>
    </div>
  );
};

const Step3 = ({ onPrevious }) => {
  return (
    <div>
      <img
        src={plate}
        className="w-14  translate-x-8 md:-translate-x-40"
        alt=""
      />
      <img
        src={knife}
        className="w-14 translate-x-64 md:translate-x-96"
        alt=""
      />

      <img
        src={chefHat}
        className="w-14 translate-y-96 translate-x-64 md:translate-y-96"
        alt=""
      />
      <h2>Step 3</h2>
      <p className="text-5xl">All set! Enjoy using our app.</p>
      <p className="mt-10">
        Allow users to share their own recipes with the Mama Put Hub community.
        Users can upload their recipes, add images, and provide step-by-step
        instructions
      </p>
      <button
        onClick={onPrevious}
        className="p-4  justify-center m-auto  rounded-xl  bg-pastel-blue  mt-4"
      >
        Let's get started
      </button>
    </div>
  );
};
