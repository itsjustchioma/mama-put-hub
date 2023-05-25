import React, { useState, useEffect, useParams } from "react";
import leftarrow from "/assets/left arrow.png";
import fullBookmarkIcon from "/public/assets/fullbookmark.png";
import { useLocation } from "react-router-dom";

export default function ViewDish() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const { id } = useParams();
      const image = await fetch(`/api/images/${id}`);
      const imageData = await image.json();
      setSelectedImage(imageData);
    };

    fetchImage();
  }, []);

  if (!selectedImage) {
    // Handle the case when `selectedImage` is null or undefined
    return <div>No image selected.</div>;
  }

  const { imageUrl, rating, name } = selectedImage;

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
