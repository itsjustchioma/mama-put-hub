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

export default function Tags({ onTagClick }) {
  const handleTagClick = (tag) => {
    let filteredRecipes = [];

    if (tag.name === "All") {
      // If "All" tag is selected, display all recipes
      filteredRecipes = recipes;
    } else {
      // Filter recipes based on the selected tag
      filteredRecipes = recipes.filter((recipe) => recipe.tags.includes(tag.name));
    }

    setRecipes(filteredRecipes);
    setCurrentPage(1); // Reset current page to 1
  };

  return (
    <div className="flex w-full overflow-scroll mx-auto whitespace-nowrap no-scrollbar md:mx-auto md:w-[70%]">
      {tags.map((tag, index) => (
        <span
          className="m-2 text-center cursor-pointer p-1 rounded-3xl border-[1px] border-black text-[12px]"
          key={index}
          onClick={() => onTagClick(tag)}
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}
