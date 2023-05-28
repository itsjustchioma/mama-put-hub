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

  return (
    <div>
          <button className="text-sm" onClick={handleClearAll}>
            Clear All
          </button>
      <div className='ingredientTags mt-3'>
        <h1 className='text-[14px] font-medium'>Main Ingredients</h1>
        <div className="flex wrap flex-wrap whitespace-nowrap no-scrollbar">
          {IngredientTags.map((tag, index) => (
            <label
              className={`m-2 text-center p-1 rounded-xl border border-black text-xs cursor-pointer ${
                selectedIngredients.includes(tag.name) ? 'bg-blue-500 text-white' : ''
              }`}
              key={index}
            >
              <input
                type="checkbox"
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

      <div className='cookTimeTags mt-3'>
        <h1 className='text-[14px] font-medium'>Cook Time</h1>
        <div className="flex flex-wrap whitespace-nowrap no-scrollbar">
          {CookTimeTags.map((tag, index) => (
            <label
              className={`m-2 text-center p-1 rounded-3xl border-[1px] border-black text-[12px] cursor-pointer ${
                selectedCookTimes.includes(tag.name) ? 'bg-blue-500 text-white' : ''
              }`}
              key={index}
            >
              <input
                type="checkbox"
                name="cookTime"
                value={tag.name}
                checked={selectedCookTimes.includes(tag.name)}
                onChange={handleCookTimeChange}
                className='hidden'

              />
              <span className="checkmark"></span>
              <span className="label-text">{tag.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className='levelTags mt-3'>
        <h1 className='text-[14px] font-medium'>Difficulty</h1>
        <div className="flex flex-wrap whitespace-nowrap no-scrollbar">
          {LevelTags.map((tag, index) => (
            <label
              className={`m-2 text-center p-1 rounded-3xl border-[1px] border-black text-[12px] cursor-pointer ${
                selectedLevels.includes(tag.name) ? 'bg-blue-500 text-white' : ''
              }`}
              key={index}
            >
              <input
                type="checkbox"
                name="level"
                value={tag.name}
                checked={selectedLevels.includes(tag.name)}
                onChange={handleLevelChange}
                className='hidden'

              />
              <span className="checkmark"></span>
              <span className="label-text">{tag.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className='dishTypeTags mt-3'>
        <h1 className='text-[14px] font-medium'>Dish Type</h1>
        <div className="flex flex-wrap whitespace-nowrap no-scrollbar">
          {DishTypeTags.map((tag, index) => (
            <label
              className={`m-2 text-center p-1 rounded-3xl border-[1px] border-black text-[12px] cursor-pointer ${
                selectedDishTypes.includes(tag.name) ? 'bg-blue-500 text-white' : ''
              }`}
              key={index}
            >
              <input
                type="checkbox"
                name="dishType"
                value={tag.name}
                checked={selectedDishTypes.includes(tag.name)}
                onChange={handleDishTypeChange}
                className='hidden'
              />
              <span className="checkmark"></span>
              <span className="label-text">{tag.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className='suggestedDietsTags mt-3 mb-20'>
        <h1 className='text-[14px] font-medium'>Suggested Diets</h1>
        <div className="flex flex-wrap whitespace-nowrap no-scrollbar">
          {SuggestedDietsTags.map((tag, index) => (
            <label
              className={`m-2 text-center p-1 rounded-3xl border-[1px] border-black text-[12px] cursor-pointer ${
                selectedDiets.includes(tag.name) ? 'bg-blue-500 text-white' : ''
              }`}
              key={index}
            >
              <input
                type="checkbox"
                name="diet"
                value={tag.name}
                checked={selectedDiets.includes(tag.name)}
                onChange={handleDietChange}
                className='hidden'

              />
              <span className="checkmark"></span>
              <span className="label-text">{tag.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
