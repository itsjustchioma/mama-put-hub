import React from "react";
import { useParams } from "react-router-dom";
import CarouselImageGallery from "../components/CarouselImageGallery";

function ViewDish() {
  const { id } = useParams();

  // Find the selected dish based on the id
  const selectedDish = CarouselImageGallery.CarouselImageGallery.find(
    (dish, index) => index.toString() === id
  );

  if (!selectedDish) {
    return <div>No dish found.</div>;
  }

  const { imageURL, name, rating } = selectedDish;

  return (
    <div>
      <img src={imageURL} alt="Dish" />
      <h2>{name}</h2>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default ViewDish;
