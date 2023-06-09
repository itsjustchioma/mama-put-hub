import React, { useState } from 'react';

export default function FilterTags() {
  const IngredientTags = [
    { name: "Fish" },
    { name: "Stocks" },
    { name: "Spaghetti" },
    { name: "Chicken" },
    { name: "Broccoli" },
    { name: "Eggs" },
    { name: "Beans" },
  ];

  const CookTimeTags = [
    { name: "Under 15 mins" },
    { name: "Under 30 mins" },
    { name: "Under 60 mins" },
  ];

  const LevelTags = [
    { name: "Easy" },
    { name: "Medium" },
    { name: "Like a PRO" },
  ];

  const DishTypeTags = [
    { name: "Breakfast" },
    { name: "Lunch" },
    { name: "Dinner" },
    { name: "Snack" },
    { name: "Dessert" },
    { name: "Appetizers" },
    { name: "Brunch" },
  ];

  const SuggestedDietsTags = [
    { name: "Mediterranean Diet" },
    { name: "Flexitarian Diet" },
    { name: "Vegetarian/Vegan Diet" },
    { name: "Ketogenic Diet (Keto)" },
    { name: "Paleo Diet" },
    { name: "DASH Diet (Dietary Approaches to Stop Hypertension)" },
    { name: "Glucose Free" },
  ];

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedCookTimes, setSelectedCookTimes] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedDishTypes, setSelectedDishTypes] = useState([]);
  const [selectedDiets, setSelectedDiets] = useState([]);

  const handleIngredientChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedIngredients([...selectedIngredients, value]);
    } else {
      setSelectedIngredients(selectedIngredients.filter((ingredient) => ingredient !== value));
    }
  };

  const handleCookTimeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCookTimes([...selectedCookTimes, value]);
    } else {
      setSelectedCookTimes(selectedCookTimes.filter((cookTime) => cookTime !== value));
    }
  };

  const handleLevelChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedLevels([...selectedLevels, value]);
    } else {
      setSelectedLevels(selectedLevels.filter((level) => level !== value));
    }
  };

  const handleDishTypeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedDishTypes([...selectedDishTypes, value]);
    } else {
      setSelectedDishTypes(selectedDishTypes.filter((dishType) => dishType !== value));
    }
  };

  const handleDietChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedDiets([...selectedDiets, value]);
    } else {
      setSelectedDiets(selectedDiets.filter((diet) => diet !== value));
    }
  };

  const handleClearAll = () => {
    setSelectedIngredients([]);
    setSelectedCookTimes([]);
    setSelectedLevels([]);
    setSelectedDishTypes([]);
    setSelectedDiets([]);
  };

  const filteredResults = []; // Placeholder for filtered results (replace with your own logic)

  return (
    <div>
      <button className="text-sm" onClick={handleClearAll}>
        Clear All
      </button>
      <div className="ingredientTags mt-3">
        <h1 className="text-[14px] font-medium">Main Ingredients</h1>
        <div className="flex wrap flex-wrap whitespace-nowrap no-scrollbar">
          {IngredientTags.map((tag, index) => (
            <label
              className={`m-2 text-center p-1 rounded-xl border border-black text-xs cursor-pointer ${
                selectedIngredients.includes(tag.name)
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
              key={index}
            >
              <input
                type="checkbox"
                required
                name="ingredient"
                value={tag.name}
                checked={selectedIngredients.includes(tag.name)}
                onChange={handleIngredientChange}
                className="mr-1 hidden"
              />
              <span className="checkmark"></span>
              <span className="label-text">{tag.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Implement other tag categories (CookTimeTags, LevelTags, DishTypeTags, SuggestedDietsTags) */}

      <p>Showing {filteredResults.length} results</p>

      {/* Render the filtered results */}
      {/* Implement your rendering logic for the filtered results */}
    </div>
  );
}
