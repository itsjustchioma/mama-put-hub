import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarouselImageGallery from "../components/CarouselImageGallery";
import starRating from "/assets/preference.png";
import emptyBookmarkIcon from "/public/assets/emptybookmark.png";
import fullBookmarkIcon from "/public/assets/fullbookmark.png";
import { useNavigate } from "react-router-dom";
import Tags from "../components/Tags";
import Header from "../components/Header";

export default function RecipesPage(props) {
  const [bookmarkStatus, setBookmarkStatus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Step 1: Add current page state
  const navigate = useNavigate();

  const handleBookMarkClick = (index) => {
    const updatedStatus = [...bookmarkStatus];
    updatedStatus[index] = !updatedStatus[index];
    setBookmarkStatus(updatedStatus);
  };

  const handleImageClick = (index) => {
    navigate(`/ViewDish/${index}`);
  };

  // Step 2: Define items per page
  const itemsPerPage = 6;

  // Step 3: Calculate total number of pages
  const totalPages = Math.ceil(CarouselImageGallery.CarouselImageGallery.length / itemsPerPage);

  // Step 4: Modify array of items based on current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = CarouselImageGallery.CarouselImageGallery.slice(startIndex, endIndex);

  // Step 5: Handle previous and next page navigation
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-[90%] mx-auto ">
        <Header/>
      <Tags />
      <h1 className="text-xl font-semibold">{props.title}</h1>

      <div className="carousel overflow-x-scroll no-scrollbar m-auto ">
        <div className="inner-carousel  flex flex-wrap justify-start  ">
          {displayedItems.map((item, index) => (
            <div className="item w-64 h-[22rem]" key={index}>
              <div className="w-64 h-64 object-center p-4 pl-4 relative cursor-pointer top-0">
                <button className="absolute right-5">
                  <img
                    src={
                      bookmarkStatus[index]
                        ? fullBookmarkIcon
                        : emptyBookmarkIcon
                    }
                    className="w-5 my-2"
                    alt="bookmark"
                    onClick={() => handleBookMarkClick(index)}
                  />
                </button>
                <img
                  src={item.imageURL}
                  className="rounded-md bg-slate-200 h-full w-full"
                  alt=""
                  onClick={() => handleImageClick(index)} // Pass the index to the handleImageClick function
                />
                <Link to={`/ViewDish/${index}`}>
                  {" "}
                  {/* Pass the index as a parameter */}
                  <div className=" mt-2 ">
                    <h5 className="text-[14px] font-semibold">{item.name}</h5>
                    <p className="flex items-center text-[14px]">
                      <img src={starRating} className="w-4 f" alt="rating" />
                      {item.rating}
                    </p>
                    <p className="text-[14px]">{item.type}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {/* Step 6: Add previous and next page navigation */}
        {currentPage > 1 && (
          <button className="mx-2" onClick={goToPreviousPage}>
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button className="mx-2" onClick={goToNextPage}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
