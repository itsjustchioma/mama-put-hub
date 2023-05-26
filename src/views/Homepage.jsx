import React from "react";
import Navigation from "../components/Navigation/Navigation";
import ImageCarouselFrame from "../components/ImageCarouselFrame";
import Header from "../components/Header";
import SideBarNavigation from "../components/Navigation/SideBarNavigation";
import Tags from "../components/Tags";
import homeBackground from "/assets/homeBackground.svg";
import "../index.css"; 

const Homepage = (props) => {
  return (
    <div className="bg-background-color h-[90vh] overflow-scroll  m-auto md:h-[100vh]">
      <Header />

      <div className="w-10/12 mx-auto">
      <Tags />
      <div className="home-text flex flex-col-reverse my-4 md:flex md:flex-row md:items-center">
          <img src={homeBackground} alt="" className="md:h-[30%] md:w-[60%] animate-fadeIn" />
          <div className="animate-fadeIn">
            <h1 className="text-6xl">Welcome ooo!!</h1>
            <span className="text-2xl">You don come MaMaPutHub</span>
            <p className="text-lg">where you fit find ogbonge food recipes!!</p>
          </div>
        </div>
        <ImageCarouselFrame title={"What do you want to eat today?"} />
        <ImageCarouselFrame title={"Popular Recipes?"} />
        <Navigation />
      </div>
    </div>
  );
};

export default Homepage;
