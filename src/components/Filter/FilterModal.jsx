import React, { useState } from "react";
import FilterTags from "./FilterTags";
import Button from "../Button";
import BackArrow from "../BackClick/BackArrow";

export default function FilterModal({ closeModal }) {
  const [clearTags, setClearTags] = useState(false);

  const handleBackClick = () => {
    closeModal(false);
  };

 

  const handleTagsCleared = () => {
    setClearTags(false);
  };
  
  
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-[9999] no-scrollbar">
      <div className="modal-content p-5 overflow-scroll h-[90vh] no-scrollbar">
        <div className="flex justify-between">
          <BackArrow onClick={handleBackClick} />
          
        </div>
        <h1 className="text-lg font-semibold mt-4">Filter</h1>
        <FilterTags onTagsCleared={handleTagsCleared} clearTags={clearTags} />
      </div>
      <div className="mb-20 absolute left-0 right-0 bottom-3">
        <Button title="Showing 87 results" />
      </div>
    </div>
  );
}
