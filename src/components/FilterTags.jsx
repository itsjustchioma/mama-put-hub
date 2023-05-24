import React from 'react'


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
        { name: "Desert" },
        { name: "Appetizers" },
        { name: "Brunch" },
      ];

      const SuggestedDietsTags = [
        { name: " Mediterranean Diet" },
        { name: "Flexitarian Diet" },
        { name: "Vegetarian/Vegan Diet" },
        { name: "Ketogenic Diet (Keto)" },
        { name: "Paleo Diet" },
        { name: "DASH Diet (Dietary Approaches to Stop Hypertension)" },
        { name: "Glucose Free" },

          
      ];
    
      
  return (
  <div>
    <div className='ingredientTags mt-3'>
        <h1 className='text-[14px] font-medium'>Main Ingredients</h1>
    <div className="flex wrap flex-wrap whitespace-nowrap no-scrollbar">
    {IngredientTags.map((tag, index) => (
      <span
        className="m-2 text-center    p-1 rounded-3xl  border-[1px] border-black text-[12px]"
        key={index}
      >
        <span>{tag.name}</span>
      </span>
    ))}
  </div>

  <div className='cookTimeTags mt-3'>
    <h1 className='text-[14px] font-medium'>Cook Time</h1>
  <div className="flex  flex-wrap whitespace-nowrap no-scrollbar">
    {CookTimeTags.map((tag, index) => (
      <span
        className="m-2 text-center    p-1 rounded-3xl  border-[1px] border-black text-[12px]"
        key={index}
      >
        <span>{ tag.name}</span>
      </span>
    ))}
  </div>
  </div>

  <div className='levelTags mt-3'>
    <h1 className='text-[14px] font-medium'>Difficulty</h1>
  <div className="flex  flex-wrap whitespace-nowrap no-scrollbar">
    {LevelTags.map((tag, index) => (
      <span
        className="m-2 text-center    p-1 rounded-3xl  border-[1px] border-black text-[12px]"
        key={index}
      >
        <span>{ tag.name}</span>
      </span>
    ))}
  </div>
  </div>

  <div className='dishTypeTags mt-3'>
    <h1 className='text-[14px] font-medium'>Dish Type</h1>
  <div className="flex  flex-wrap whitespace-nowrap no-scrollbar">
    {DishTypeTags.map((tag, index) => (
      <span
        className="m-2 text-center    p-1 rounded-3xl  border-[1px] border-black text-[12px]"
        key={index}
      >
        <span>{ tag.name}</span>
      </span>
    ))}
  </div>
  </div>

  <div className='suggestedDietsTags mt-3  mb-20'>
    <h1 className='text-[14px] font-medium '>Suggested Diets</h1>
  <div className="flex  flex-wrap whitespace-nowrap no-scrollbar">
    {SuggestedDietsTags.map((tag, index) => (
      <span
        className="m-2 text-center    p-1 rounded-3xl  border-[1px] border-black text-[12px]"
        key={index}
      >
        <span>{ tag.name}</span>
      </span>
    ))}
  </div>
  </div>
    </div>
  </div>
  )
}
