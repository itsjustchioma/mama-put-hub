import React from 'react'
import homeBackground from "/assets/homeBackground.svg";

function WelcomeFrame() {
  return (
    <div className="home-text flex flex-col-reverse my-4 md:flex md:flex-row md:items-center">
      <img
        src={homeBackground}
        alt=""
        className="md:h-[30%] md:w-[60%] animate-fadeIn"
      />
      <div className="animate-fadeIn">
        <h1 className="text-6xl">Welcome ooo!!</h1>
        <span className="text-2xl">You don come MaMaPutHub</span>
        <p className="text-lg">where you fit find ogbonge food recipes!!</p>
      </div>
    </div>
  );
}

export default WelcomeFrame