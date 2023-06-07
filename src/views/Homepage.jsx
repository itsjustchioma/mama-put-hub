import Navigation from "../components/Navigation/Navigation";
import ImageCarouselFrame from "../components/ImageCarouselFrame";
import SideBarNavigation from "../components/Navigation/SideBarNavigation";
import { account } from "../services/appwriteConfig";
import "../index.css";
import React, { useEffect, useRef } from "react";

import WelcomeFrame from "../components/WelcomeFrame";

const Homepage = (props) => {
  return (
    <div className="bg-background-color h-[94vh] overflow-scroll  m-auto md:h-[100vh] no-scrollbar">

      <div className="w-10/12 mx-auto">
        <WelcomeFrame />
        
        <ImageCarouselFrame title={"What do you want to eat today?"} />
     
     <div className=" mb-24">

        <ImageCarouselFrame title={"Feautured Recipes"} />
     </div>
      </div>
    </div>
  );
};

export default Homepage;
