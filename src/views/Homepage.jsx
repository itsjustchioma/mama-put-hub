import React from "react";
import Navigation from "../components/Navigation";
import ImageCarouselFrame from "../components/ImageCarouselFrame";
import Header from "../components/Header";
import SideBarNavigation from "../components/SideBarNavigation"


const Homepage = (props) => {
  return (
    <div className="bg-background-color   h-[90vh] overflow-scroll  m-auto">
      <Header/>
      <SideBarNavigation/>
<ImageCarouselFrame title={"What do you want to eat today?"}/>
<ImageCarouselFrame  title={"Popular Recipes?"}/>
      <Navigation/>
    </div>
  );
};

export default Homepage;
