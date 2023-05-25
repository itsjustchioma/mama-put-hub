import React from "react";
import { useParams } from "react-router-dom";
import CarouselImageGallery from "../components/CarouselImageGallery";

const ViewDish = () => {
  const { id } = useParams(); // Retrieve the id (index) from the URL parameter

  // Get the dish information based on the id (index)
  const dish = CarouselImageGallery.CarouselImageGallery[Number(id)];

  return (
    <div>
      {dish ? (
        <div>
          <h1>{dish.name}</h1>
          <img src={dish.imageURL} alt={dish.name} />
          <p>Rating: {dish.rating}</p>
        </div>
      ) : (
        <p>No dish found.</p>
      )}
    </div>
  );
};

export default ViewDish;
