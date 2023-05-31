import React, { useState } from "react";
import { PreferencesMenu } from "../components/PreferencesData";
import BackArrow from "../components/BackClick/BackArrow";
import { Link, useNavigate } from "react-router-dom";

function UserPreferencePage() {
  const [selectedDietOptions, setSelectedDietOptions] = useState([]);
  const [selectedAllergyOptions, setSelectedAllergyOptions] = useState([]);
  const [selectedFavoriteDishesOptions, setSelectedFavoriteDishesOptions] = useState([]);
  const [dietOptionsToShow, setDietOptionsToShow] = useState(4);
  const [allergyOptionsToShow, setAllergyOptionsToShow] = useState(4);
  const [favoriteDishesOptionsToShow, setFavoriteDishesOptionsToShow] = useState(4);


    // Handler for selecting/deselecting a diet option
  const handleDietOptionSelect = (option) => {
    if (selectedDietOptions.includes(option)) {
      setSelectedDietOptions(selectedDietOptions.filter((item) => item !== option));
    } else {
      setSelectedDietOptions([...selectedDietOptions, option]);
    }
  };


   // Handler for selecting/deselecting an allergy option
  const handleAllergyOptionSelect = (option) => {
    if (selectedAllergyOptions.includes(option)) {
      setSelectedAllergyOptions(selectedAllergyOptions.filter((item) => item !== option));
    } else {
      setSelectedAllergyOptions([...selectedAllergyOptions, option]);
    }
  };


    // Handler for selecting/deselecting a favorite dishes option
  const handleFavoriteDishesOptionSelect = (option) => {
    if (selectedFavoriteDishesOptions.includes(option)) {
      setSelectedFavoriteDishesOptions(selectedFavoriteDishesOptions.filter((item) => item !== option));
    } else {
      setSelectedFavoriteDishesOptions([...selectedFavoriteDishesOptions, option]);
    }
  };


   // Function to check if an option is selected
  const isOptionSelected = (option, selectedOptions) => selectedOptions.includes(option);


   // Handler for showing more diet options
  const handleViewMoreDietOptions = () => {
    setDietOptionsToShow(dietOptionsToShow + 4);
  };


   // Handler for showing more allergy options
  const handleViewMoreAllergyOptions = () => {
    setAllergyOptionsToShow(allergyOptionsToShow + 4);
  };


  // Handler for showing more favorite dishes options
  const handleViewMoreFavoriteDishesOptions = () => {
    setFavoriteDishesOptionsToShow(favoriteDishesOptionsToShow + 4);
  };


    // Get the diet options to display based on the current value of dietOptionsToShow
  const dietOptions = PreferencesMenu.dietOptions.slice(0, dietOptionsToShow);

    // Get the allergy options to display based on the current value of allergyOptionsToShow
  const allergyOptions = PreferencesMenu.allergyOptions.slice(0, allergyOptionsToShow);

    // Get the favorite dishes options to display based on the current value of favoriteDishesOptionsToShow
  const favoriteDishesOptions = PreferencesMenu.favoriteDishesOptions.slice(0, favoriteDishesOptionsToShow);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      <div className="w-[90%] mx-auto  h-[90vh] overflow-scroll no-scrollbar md:w-[80%] md:mx-auto">
        <div className="my-4">
          <BackArrow onClick={handleBackClick} />
        </div>

        <h1 className="text-[2em] font-medium">Your Preferences</h1>
        <p className="text-sm">
          Tell us about your preferences and we can choose the best recipes for you
        </p>

        <div className="mt-4">
          <div>
            <h1 className="font-medium">Choose your diet</h1>
            <div className="flex flex-wrap whitespace-nowrap no-scrollbar">
              {dietOptions.map((diet, index) => (
      <label
      key={index}
      className={`m-2 text-center p-1 rounded-xl border border-black text-[12px] cursor-pointer ${
        isOptionSelected(diet.value, selectedDietOptions)
          ? 'bg-blue-500 text-white'
          : ''
      }`}
      onClick={() => handleDietOptionSelect(diet.value)}
    >
      <input
        type="checkbox"
        checked={isOptionSelected(diet.value, selectedDietOptions)}
        onChange={() => {}}
        className="mr-1 hidden"
      />
      <span className="checkmark"></span>
      <span className="label-text">{diet.name}</span>
    </label>
    
              ))}
            </div>
          </div>
          {dietOptionsToShow < PreferencesMenu.dietOptions.length && (
            <div className="text-center  md:text-left">
              <button
                onClick={handleViewMoreDietOptions}
                className="text-slate-500 cursor:pointer  justify-center"
              >
                show more
              </button>
            </div>
          )}

          <div className="my-6">
            <h1 className="font-medium">Do you have allergies?</h1>
            <div className="flex flex-wrap whitespace-nowrap no-scrollbar">
              {allergyOptions.map((allergy, index) => (
                <label
                  key={index}
                  className={`m-2 text-center p-1 rounded-xl border border-black text-[12px] cursor-pointer ${
                    isOptionSelected(allergy.value, selectedAllergyOptions) ? 'bg-blue-500 text-white' : ''
                  }`}
                  onClick={() => handleAllergyOptionSelect(allergy.value)}
                >
                  <input
                    type="checkbox"
                    checked={isOptionSelected(allergy.value, selectedAllergyOptions)}
                    onChange={() => {}}
                    className="mr-1 hidden"
                  />
                  <span className="checkmark"></span>
                  <span className="label-text">{allergy.name}</span>
                </label>
              ))}
            </div>
            {allergyOptionsToShow < PreferencesMenu.allergyOptions.length && (
              <div className="text-center md:text-left">
                <button
                  onClick={handleViewMoreAllergyOptions}
                  className="text-slate-500 cursor:pointer"
                >
                  show more
                </button>
              </div>
            )}
          </div>

          <h1 className="font-medium">Favorite Dishes</h1>
          <div className="flex flex-wrap whitespace-nowrap no-scrollbar">
            {favoriteDishesOptions.map((dish, index) => (
              <label
                key={index}
                className={`m-2 text-center p-1 rounded-xl border border-black text-[12px] cursor-pointer ${
                  isOptionSelected(dish.value, selectedFavoriteDishesOptions) ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleFavoriteDishesOptionSelect(dish.value)}
              >
                <input
                  type="checkbox"
                  checked={isOptionSelected(dish.value, selectedFavoriteDishesOptions)}
                  onChange={() => {}}
                  className="mr-1 hidden"
                />
                <span className="checkmark"></span>
                <span className="label-text">{dish.name}</span>
              </label>
            ))}
          </div>
          {favoriteDishesOptionsToShow < PreferencesMenu.favoriteDishesOptions.length && (
            <div className="text-center  md:text-left">
              <button
                onClick={handleViewMoreFavoriteDishesOptions}
                className="text-slate-500 cursor:pointer "
              >
                show more
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserPreferencePage;
