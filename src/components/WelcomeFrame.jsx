import React from "react";
import homeBackground from "/assets/homeBackground.svg";

function WelcomeFrame() {
  return (
    <div className="home-text flex flex-col-reverse my-4 md:flex md:flex-row md:items-center">
      <img
        src={homeBackground}
        alt=""
        className="md:h-[30%] md:w-[60%] animate-fadeIn"
      />
      <div className="animate-fadeIn text-center">
        <h1 className="text-4xl font-bold">Welcome to Mamaput Hub!</h1>
        <span className="text-lg italic text-copper-orange">
          The ultimate destination for food lovers of all kinds.
        </span>
        <br /> <br />
        <p className="text-normal">
          Discover, share, and collaborate on delicious recipes with fellow food
          enthusiasts, and let your taste buds embark on a flavorful journey.
        </p>
      </div>
    </div>
  );
}

export default WelcomeFrame;
