import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarouselImageGallery from "./CarouselImageGallery";
import { motion } from "framer-motion";
import starRating from "/assets/preference.png";
import emptyBookmarkIcon from "/public/assets/emptybookmark.png";
import fullBookmarkIcon from "/public/assets/fullbookmark.png";
import ViewDish from '../views/ViewDish';

export default function ImageCarouselFrame(props) {
  // const [isBookmarkVisible, setIsBookmarkVisible] = useState(false);
  // const handleBookMarkClick =() =>{
  //     setIsBookmarkVisible(!isBookmarkVisible)
  // }
  const clickedItems = [];


  const [selectedItem, setSelelctedItem] = useState(null);
   const handleImageClick = (item) => {
    setSelelctedItem(item);
    clickedItems.push(item);

    console.log(item);
    
  };


  

  
 
  return (
    <div className=" ">
      <h1 className="text-xl  font-semibold">{props.title}</h1>

      <motion.div className="carousel overflow-scroll no-scrollbar m-auto h-80">
        <motion.div className="inner-carousel flex justify-start  ">
          {CarouselImageGallery.map((item, index) => (
            <motion.div className="item w-64 h-64" key={index} >
            <Link to={"/ViewDish"}>
              <div className="w-64 h-64 object-center p-4 pl-4 relative cursor-pointer top-0 ">
                <button className="absolute right-5 ">
                  <img
                    src={emptyBookmarkIcon}
                    className="w-5 my-2"
                    alt="bookmark"
                    
                  />
                </button>
                <img
                  src={item.imageURL}
                  className="rounded-md bg-slate-200 h-full w-full  "
                  alt=""
                  onClick={() => {
                    handleImageClick(item)
                   

                  }}
                />

                <div className=" mt-2 ">
                  <h5 className="text-[14px]">{item.name}</h5 >
                  <p className="flex items-center text-[14px]">
                    <img src={starRating} className="w-4 f" alt="rating" />:{" "}
                    {item.rating}
                    
                  </p>
                </div>
              </div>
              </Link>
            </motion.div>
            
          ))}
          
        </motion.div>
      </motion.div>
    </div>
  );
}
