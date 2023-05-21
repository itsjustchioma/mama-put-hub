import React from "react";
import CarouselImageGallery from "./CarouselImageGallery";
import { motion } from "framer-motion";
import starRating from "/assets/preference.png";
import deleteicon from "/assets/pot logo.png";



export default function ImageCarouselFrame(props) {
  return (

    <div className=" ">
      <motion.div className="carousel overflow-scroll w-10/12 m-auto h-96">
      <h1 className="text-2xl  font-semibold">{props.title}</h1>

        <motion.div className="inner-carousel flex justify-start">
          {CarouselImageGallery.map((item, index) => (
            <motion.div className="item w-64 h-64" key={index}>
              <div className="w-64 h-64 object-center p-4 relative top-0">
              <button className="absolute right-5">
                  <img src={deleteicon} className="w-5" alt="" />
                </button>
                <img
                  src={item.imageURL}
                  className="rounded-md bg-slate-200 h-full w-full "
                  alt=""
                />
                <div className=" mt-2">
                  <h3>{item.name}</h3>
                  <p className="flex items-center"><img src={starRating} className="w-4 f" alt="" />: {item.rating}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
