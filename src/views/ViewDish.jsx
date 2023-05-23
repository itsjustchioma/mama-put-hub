import React from "react";
import leftarrow from "/assets/left arrow.png";
import fullBookmarkIcon from "/public/assets/fullbookmark.png";

export default function ViewDish(props) {
  const { imageUrl, rating, name } = props;

  return (
    <div>
      <div className="flex justify-between">
        <button>
          <img src={leftarrow} className="w-4" alt="" />
        </button>

        <button className="text-sm">
          <img src={fullBookmarkIcon} className="w-4" alt="" />
        </button>
      </div>

      {/* Render the image, rating, and name */}
      <img src={imageUrl} alt="Dish" />
      <p>Rating: {rating}</p>
      <h3>{name}</h3>

      {/* Other content */}
    </div>
  );
}
