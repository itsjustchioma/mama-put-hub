import React, { useState } from "react";
import dummyImage from "/assets/user.png";
import Button from "../components/Button";
import leftarrow from "/assets/left arrow.png";

const LevelTags = [
  { name: "Easy" },
  { name: "Medium" },
  { name: "Like a PRO" },
];

function FoodForm({ formData, setFormData, handlePrevious }) {
  const [foods, setFoods] = useState([{ name: "", time: "" }]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFoods = [...foods];
    updatedFoods[index][name] = value;
    setFoods(updatedFoods);
    setFormData((prevData) => ({
      ...prevData,
      steps: updatedFoods,
    }));
  };

  const handleAddFood = () => {
    setFoods([...foods, { name: "", time: "" }]);
  };

  const handleRemoveFood = (index) => {
    const updatedFoods = [...foods];
    updatedFoods.splice(index, 1);
    setFoods(updatedFoods);
    setFormData((prevData) => ({
      ...prevData,
      steps: updatedFoods,
    }));
  };

  return (
    <div>
      {foods.map((food, index) => (
        <div key={index}>
          <label>
            Food Name: <br />
            <input
              type="text"
              name="name"
              value={food.name}
              onChange={(e) => handleChange(e, index)}
              className="my-2 p-2 rounded border border-gray-300"
            />
          </label>{" "}
          <br />
          <label>
            Time: <br />
            <input
              type="text"
              name="time"
              value={food.time}
              onChange={(e) => handleChange(e, index)}
              className="my-2 p-2 rounded border border-gray-300"
            />
          </label>
          {index > 0 && (
            <button type="button" onClick={() => handleRemoveFood(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <br />
      
      <div onClick={handleAddFood}>
      <Button  title="Add More Steps" />

      </div>
    <br />

    </div>
  );
}

function NewRecipe() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    picture: null,
    name: "",
    password: "",
    description: "",
    level: "",
    count: 0,
    steps: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalTime = calculateTotalTime();
    const updatedSteps = formData.steps.map((step) => ({
      ...step,
      totalTime: step.time ? parseInt(step.time) : 0,
    }));
    setFormData((prevData) => ({
      ...prevData,
      steps: updatedSteps,
      totalTime: totalTime,
    }));
    console.log("Form submitted:", formData);
    setStep((prevStep) => prevStep + 1);
  };
  

  const handleIncrement = () => {
    setFormData((prevData) => ({
      ...prevData,
      count: prevData.count + 1,
    }));
  };

  const handleDecrement = () => {
    if (formData.count > 0) {
      setFormData((prevData) => ({
        ...prevData,
        count: prevData.count - 1,
      }));
    }
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      picture: file,
    }));
  };


  const calculateTotalTime = () => {
    let totalTime = 0;
    formData.steps.forEach((step) => {
      if (step.time) {
        totalTime += parseInt(step.time);
      }
    });
    return totalTime;
  };


  return (
    <div className="m-4 h-[90vh] overflow-scroll w-5/6  mx-auto  no-scrollbar">
      <div className="flex justify-between mb-4">
        <button>
          <img src={leftarrow} className="w-4" alt="" />
        </button>
        <button className="text-sm">clear all</button>
      </div>
      <div className="h-[90vh] overflow-scroll">
        {step === 1 && (
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <h1 className="text-lg">Recipe Publication</h1>
                <p> Add a recipe cover</p>
                <div className="bg-pastel-blue h-[30vh] mx-auto rounded-lg my-auto">
                  {formData.picture ? (
                    <img
                      src={URL.createObjectURL(formData.picture)}
                      alt="Selected"
                      className="mx-auto h-full"
                    />
                  ) : (
                    <div className="flex justify-center items-center h-full">
                      <img
                        src={dummyImage}
                        alt="Dummy"
                        className="mx-auto h-[40%] py-auto"
                      />
                    </div>
                  )}
                </div>
                <br />
                <br />
                <label htmlFor="picture" className="block font-medium">
                  <input
                    type="file"
                    id="picture"
                    accept="image/*"
                    onChange={handlePictureChange}
                    className="border border-gray-300 rounded-md p-2 w-80"
                  />
                </label>
              </div>
              <label>
                Name your recipe: <br />
                <input
                  type="text"
                  placeholder="for example? smashed potato and chicken"
                  className="border border-gray-300 rounded-md p-2 ml-2 w-80"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <div>
                <label>
                  Servings: <br />
                  <button type="button" onClick={handleDecrement}>
                    -
                  </button>
                  {formData.count}
                  <button type="button" onClick={handleIncrement}>
                    +
                  </button>
                </label>
              </div>
              <div onClick={handleNext}>
                <Button title="Next Step" />
              </div>
            </form>
            <div className="text-center text-sm mt-4">Step 1</div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="text-lg">Recipe Publication</h1>

            <form onSubmit={handleSubmit}>
              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2  w-80"
                />
              </label>
              <br />
              <label>
                Level: <br />
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="my-2 p-2 rounded border border-gray-300"
                  style={{ minWidth: "200px" }}
                >
                  <option value="">Select level</option>
                  {LevelTags.map((tag, index) => (
                    <option key={index} value={tag.name}>
                      {tag.name}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <br />
              
              <div className="flex flex-col">
                <div onClick={handlePrevious} className="mb-4">
                  <Button title="Previous Step" />
                </div>
                <div onClick={handleNext}>
                  <Button title="Next Step" />
                </div>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Step 3: Add Steps</h2>
            <form onSubmit={handleSubmit}>
              <FoodForm
                formData={formData}
                setFormData={setFormData}
                handlePrevious={handlePrevious}
              />              

              <div onClick={handlePrevious} className="mb-2">
                <Button title="Previous Step" />

              </div>
              <div onClick={handleNext}>
                  <Button title="Next Step" />
                </div>
          
             

            </form>
          </div>
        )}

{step === 4 && (
  <div>
    <h2 className="text-xl font-bold mb-4">Step 4: Summary</h2>
    <br />
    <p className="mb-2">Name: {formData.name}</p>
    <br />

    <p className="mb-2">Servings: {formData.count}</p>
    <br />

    <p className="mb-2">Description: {formData.description}</p>
    <br />

    <p className="mb-2">Level: {formData.level}</p>


    <p className="mb-2">Steps:</p>
    <ul>
      {formData.steps.map((step, index) => (
        
        <li key={index}>{step.name}: {step.time } minutes</li>
       
      ))}
    </ul>
    <p className="mb-2">
              Estimated Time: {calculateTotalTime()} minutes
            </p>


    <div className="mb-4">
      {formData.picture && (
        <img
          src={URL.createObjectURL(formData.picture)}
          alt="Selected"
          className="max-w-xs rounded"
        />
      )}
    </div>
    <div className="mb-4">
      <div onClick={handlePrevious}>
        <Button title="Previous"/>
      </div>
      <br />
      <br />

      <form onSubmit={handleSubmit}>
      <button type="submit" className="bg-pastel-blue hover:bg-laurel-green text-white font-bold py-2 px-4 rounded">
  Submit
</button>

</form>
    </div>
  </div>
)}

      </div>
    </div>
  );
}

export default NewRecipe;
