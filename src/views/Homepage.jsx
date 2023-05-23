import React from "react";
import Navigation from "../components/Navigation/Navigation";
import ImageCarouselFrame from "../components/ImageCarouselFrame";
import Header from "../components/Header";
import SideBarNavigation from "../components/Navigation/SideBarNavigation";
import Tags from "../components/Tags";

const Homepage = (props) => {
  return (
    <div className="bg-background-color h-[90vh] overflow-scroll  m-auto md:h-[100vh]">
      
      <Header />
      <div className="w-10/12 mx-auto">
        <Tags />
        <ImageCarouselFrame title={"What do you want to eat today?"} />
        <ImageCarouselFrame title={"Popular Recipes?"} />
        <Navigation />
      </div>
    </div>
  );
};

export default Homepage;
