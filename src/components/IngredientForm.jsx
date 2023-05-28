import React, { useState } from "react";
import Button from "./Button";

function IngredientForm({ formData, setFormData, handlePrevious }) {
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][name] = value;
    setIngredients(updatedIngredients);
    setFormData((prevData) => ({
      ...prevData,
      ingredients: updatedIngredients,
    }));
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
    setFormData((prevData) => ({
      ...prevData,
      ingredients: updatedIngredients,
    }));
  };

  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <label className="font-medium">
            Ingredient Name: <br />
            <input
              type="text"
              name="name"
              value={ingredient.name}
              onChange={(e) => handleChange(e, index)}
              className="my-2 p-2 rounded border border-gray-300"
            />
          </label>{" "}
          <br />
          <label className="font-medium">
            Quantity: <br />
            <input
              type="text"
              name="quantity"
              value={ingredient.quantity}
              onChange={(e) => handleChange(e, index)}
              className="my-2 p-2 rounded border border-gray-300"
            />
          </label>
          {index > 0 && (
            <button type="button" onClick={() => handleRemoveIngredient(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <br />

      <div onClick={handleAddIngredient}>
        <Button title="Add More Ingredients" />
      </div>
      <br />
    </div>
  );
}

export default IngredientForm;
