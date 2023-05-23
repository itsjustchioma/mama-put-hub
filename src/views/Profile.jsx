import React from "react";
import Header from "../components/Header";
import Tags from "../components/Tags";
import ImageCarouselFrame from "../components/ImageCarouselFrame";
import Navigation from "../components/Navigation/Navigation";

function Profile() {
  return (
      <div className="bg-background-color h-[90vh] overflow-scroll  m-auto">
        <Header />
        <div className="w-10/12 mx-auto">
          <Tags />
          <ImageCarouselFrame title={"What do you want to eat today?"} />
          <ImageCarouselFrame title={"Popular Recipes?"} />
          <Navigation />
        </div>
      </div>
  );
}

export default Profile;
