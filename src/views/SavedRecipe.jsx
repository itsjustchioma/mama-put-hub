// SavedRecipe.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BackArrow from "../components/BackClick/BackArrow";
import Modal from "../components/Modals/Modal";
import { databases, account } from "../services/appwriteConfig";

function SavedRecipe() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState(null);
  const user = account.get();

  useEffect(() => {
    const fetchCategoryInfo = async () => {
      try {
        const response = await databases.getDocument(
          "64773737337f23de254d",
          "647905e0a9f44dd4d1a4",
          category
        );
        console.log(response);
        setCategoryInfo(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategoryInfo();
  }, [category]);

  console.log(user.id);

  const handleBackClick = () => {
    navigate("/Shopping");
  };

  // This function is called when the delete button is clicked
  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    // Perform delete operation in Appwrite database

    const promise = databases.deleteDocument(
      "64773737337f23de254d",
      "647905e0a9f44dd4d1a4",
      category
    );

    promise.then(
      function (response) {
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    navigate("/Shopping");
  };

  const handleCheckboxChange = (index) => {
    if (checkedIngredients.includes(index)) {
      setCheckedIngredients(checkedIngredients.filter((i) => i !== index));
    } else {
      setCheckedIngredients([...checkedIngredients, index]);
    }
  };

  if (!categoryInfo) {
    return <div>Category not found</div>;
  }

  const { name, noOfIngredients, img, ingredients } = categoryInfo;
  const remainingIngredients = noOfIngredients - checkedIngredients.length;

  return (
    <div className="mx-auto w-[80%] mt-4 flex flex-col h-[90vh] md:h-[100vh] overflow-scroll no-scrollbar">
      <div className="flex justify-between mb-4">
        <BackArrow onClick={handleBackClick} />
        <img
          src="/assets/delete.png"
          alt=""
          className="w-8 h-8 ml-2 cursor-pointer"
          onClick={handleDeleteClick}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        <img
          src={categoryInfo.picture}
          alt="image"
          className="h-72 md:h-[60vh] w-72 md:w-[60vh] object-cover rounded-xl dark:bg-gray-500 dark:border-gray-700 p-1"
        />
      </div>
      <h1 className="mt-4 font-semibold text-center text-lg md:text-xl">
        {categoryInfo.category_name}
      </h1>
      <p className="text-[12px]">
        {ingredients.length}/{ingredients.length} ingredients left
      </p>
      <br />
      <div>
        <h2 className="font-semibold">All Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={checkedIngredients.includes(index)}
                  required
                  onChange={() => handleCheckboxChange(index)}
                />
                &nbsp; &nbsp;
                <span
                  className={
                    checkedIngredients.includes(index) ? "text-grey-text" : ""
                  }
                >
                  {ingredient}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {showModal && (
        <Modal>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this category?</p>
            <div className="flex mt-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleConfirmDelete}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 ml-2 bg-gray-300 text-gray-800 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default SavedRecipe;
