import React from "react";

export const tags = [
  { name: "Breakfast", selected: false },
  { name: "Brunch", selected: false },
  { name: "Lunch", selected: false },
  { name: "Diary", selected: false },
  { name: "Dinner", selected: false },
  { name: "Snacks", selected: false },
  { name: "Appetizers", selected: false },
  { name: "Salad", selected: false },
  { name: "Soups", selected: false },
  { name: "Pasta and Noodles", selected: false },
  { name: "Dessert", selected: false },
  { name: "All", selected: false },
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
