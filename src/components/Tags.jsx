import React from "react";

export const tags = [
  { name: "Breakfast" },
  { name: "Brunch" },
  { name: "Lunch" },
  { name: "Diary" },
  { name: "Dinner" },
  { name: "Snacks" },
  { name: "Appetizers" },
  { name: "Salad" },
  { name: "Soups" },
  { name: "Pasta and Noodles" },
  { name: "Dessert" },
  { name: "All" },
];

export default function Tags({ activeTag, onTagClick }) {
  const handleTagClick = (tag) => {
    onTagClick(tag);
  };

  return (
    <div className="flex w-full overflow-scroll mx-auto whitespace-nowrap no-scrollbar md:mx-auto md:w-[70%]">
      {tags.map((tag, index) => (
        <span
          className={`m-2 text-center cursor-pointer p-1 rounded-3xl border-[1px] ${
            activeTag === tag ? "border-blue-500" : "border-black"
          } text-[12px] ${activeTag === tag ? "bg-blue-500 text-white" : ""}`}
          key={index}
          onClick={() => handleTagClick(tag)}
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}
