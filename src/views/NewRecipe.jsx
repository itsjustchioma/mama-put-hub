import React, { useState, useEffect } from "react";
import dummyImage from "/assets/user.png";
import Button from "../components/Button";
import BackArrow from "../components/BackClick/BackArrow";
import { Link, useNavigate } from "react-router-dom";
import { tags } from "../components/Tags";
import IngredientForm from "../components/IngredientForm";
import { account, storage } from "../services/appwriteConfig";
import { createRecipe } from "../services/appwriteConfig";
import { v4 as uuidv4 } from "uuid";
import "../index.css";

const LevelTags = [
  { name: "Easy" },
  { name: "Medium" },
  { name: "Like a PRO" },
];
const userId = account.get();

userId.then(
  function (response) {
    console.log(response.$id);
    console.log(response.name);
  },
  function (error) {
    console.log(error);
  }
);

function FoodForm({ formData, setFormData, handlePrevious }) {
  const [steps, setSteps] = useState([{ name: "" }]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const updatedSteps = [...steps];
    updatedSteps[index].name = value;
    setSteps(updatedSteps);
    setFormData((prevData) => ({
      ...prevData,
      steps: updatedSteps.map((step) => step.name),
    }));
  };

  const handleAddStep = () => {
    setSteps([...steps, { name: "" }]);
  };

  const handleRemoveStep = (index) => {
    const updatedSteps = [...steps];
    updatedSteps.splice(index, 1);
    setSteps(updatedSteps);
    setFormData((prevData) => ({
      ...prevData,
      steps: updatedSteps.map((step) => step.name),
    }));
  };

  return (
    <div>
      {steps.map((step, index) => (
        <div key={index}>
          <label className="font-medium">
            Step Name: <br />
            <input
              type="text"
              value={step.name}
              required
              onChange={(e) => handleChange(e, index)}
              className="my-2 p-2 rounded border border-gray-300"
            />
          </label>{" "}
          <br />
          {index > 0 && (
            <button type="button" onClick={() => handleRemoveStep(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <br />

      <div onClick={handleAddStep}>
        <Button title="Add More Steps" />
      </div>
      <br />
    </div>
  );
}

function NewRecipe() {
  const [selectedPicture, setSelectedPicture] = useState(null);

  const [step, setStep] = useState(1);

  useEffect(() => {
    account.get().then(
      (response) => {
        setFormData((prevData) => ({
          ...prevData,
          userId: response.$id,
          username: response.name,
        }));
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createRecipe(formData);
      console.log("Recipe created:", response);
      // Handle any further actions or redirection after creating the recipe
    } catch (error) {
      console.error("Error creating recipe:", error);
      // Handle the error appropriately
    }

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
    setStep((prevStep) => prevStep + 1);
    navigate("/AllDone");
  };

  const handleIncrement = () => {
    setFormData((prevData) => ({
      ...prevData,
      servings: prevData.servings + 1,
    }));
  };

  const handleDecrement = () => {
    if (formData.servings > 0) {
      setFormData((prevData) => ({
        ...prevData,
        servings: prevData.servings - 1,
      }));
    }
  };

  let picture = " ";

  const handlePictureChange = async (event) => {
    const fileIm = event.target.files[0];
    setSelectedPicture(URL.createObjectURL(fileIm));
    console.log(fileIm);
    const fileId = uuidv4(); // Generate a random UUID

    const userId = account.get();

    userId.then(
      function (response) {
        console.log(response.$id);
        console.log(userId);
      },
      function (error) {
        console.log(error);
      }
    );

    try {
      // Upload the file to the storage
      const newImage = await storage.createFile(
        "647e6735532e8f214235",
        fileId,
        fileIm
      );
      console.log(newImage);

      console.log(newImage.URL);
      const result = storage.listFiles("647e6735532e8f214235");
      console.log(result);

      const urlLink = `https://cloud.appwrite.io/v1/storage/buckets/647e6735532e8f214235/files/${fileId}/view?project=64676cf547e8830694b8`;
      console.log(urlLink);

      setFormData((prevData) => ({
        ...prevData,
        picture: {
          url: urlLink,
        },
      }));
      picture = {
        url: urlLink,
      };
      console.log(urlLink);

      // Update the formData with the new image
      setFormData((prevData) => ({
        ...prevData,
        picture: urlLink,
      }));
      // Handle the successful upload (e.g., update UI or trigger further actions)
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle the error (e.g., show an error message)
    }
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

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const navigate = useNavigate();

  const [image, setImage] = useState();
  const uploadImage = async (e) => {
    e.preventDefault();

    // Get the file input element
    const fileInput = document.getElementById("picture");
    const file = fileInput.files[0];

    if (file) {
      try {
        // Upload the file to the storage
        const newImage = await storage.createFile(
          "647e6735532e8f214235",
          userId,
          file
        );
        console.log(newImage);
        // Handle the successful upload (e.g., update UI or trigger further actions)
      } catch (error) {
        console.error("Error uploading file:", error);
        // Handle the error (e.g., show an error message)
      }
    } else {
      console.log("No picture selected");
    }
  };

  const [formData, setFormData] = useState({
    picture: "",
    name: "",
    description: "",
    level: "",
    servings: 0,
    type: "",
    ingredients: [],
    steps: [],
    userId: "",
  });

  return (
    <div className="m-4 h-[90vh] overflow-scroll w-5/6  mx-auto  no-scrollbar  md:h[100vh]">
      <div className="flex justify-between mb-4">
        <BackArrow onClick={handleBackClick} />

        <button className="text-sm"></button>
      </div>
      <div className="h-[90vh] overflow-scroll">
        {step === 1 && (
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <h1 className="text-lg font-bold">Recipe Publication</h1>
                <p className="font-medium"> Add a recipe cover</p>
                <div className="bg-pastel-blue h-[30vh] mx-auto rounded-lg my-auto">
                  {formData.picture ? (
                    <img
                      src={selectedPicture}
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
                <label htmlFor="picture" className="block font-medium">
                  {" "}
                  Add an image <br />
                  <input
                    type="file"
                    id="picture"
                    accept="image/*"
                    onChange={handlePictureChange}
                    className="border border-gray-300 rounded-md p-2 w-72 font-normal"
                    required
                  />
                </label>
              </div>
              <label className="font-medium">
                Name of recipe <br />
                <input
                  type="text"
                  placeholder="for example? smashed potato and chicken"
                  className="border font-normal border-gray-300 rounded-md p-2 ml-2 w-72"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <div>
                <br />
                <label className="font-medium" required>
                  Servings: <br />
                  <button type="button" onClick={handleDecrement}>
                    -
                  </button>
                  {formData.servings}
                  <button type="button" onClick={handleIncrement}>
                    +
                  </button>
                </label>
              </div>
              <br />
              <div onClick={handleNext}>
                <Button onClick={(e) => uploadImage(e)} title="Next Step" />
              </div>
            </form>
            <div className="text-center text-sm mt-4">Step 1</div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="text-lg font-bold">Recipe Publication</h1>

            <form onSubmit={handleSubmit}>
              <label className="font-medium">
                Description:
                <br />
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 font-normal  w-72"
                  required
                />
              </label>
              <br /> <br />
              <label className="font-medium">
                Level: <br />
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="my-2 p-2 rounded border border-gray-300 font-normal"
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
              <label className="font-medium">
                Category: <br />
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="my-2 p-2 rounded border border-gray-300 font-normal"
                  style={{ minWidth: "200px" }}
                >
                  <option value="">Select Category</option>
                  {tags.map((tag, index) => (
                    <option key={index} value={tag.name}>
                      {tag.name}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <br />
              <IngredientForm
                formData={formData}
                setFormData={setFormData}
                handlePrevious={handlePrevious}
              />
              <div className="flex flex-col">
                <div onClick={handleNext}>
                  <Button title="Next Step" />
                </div>{" "}
                <br />
                <div onClick={handlePrevious} className="mb-4">
                  <Button title="Previous Step" />
                </div>
              </div>
            </form>
            <div className="text-center text-sm mt-4">Step 2</div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h1 className="text-lg font-bold">Recipe Publication</h1>
            <br />
            <form onSubmit={handleSubmit}>
              <FoodForm
                formData={formData}
                setFormData={setFormData}
                handlePrevious={handlePrevious}
              />
              <div onClick={handleNext}>
                <Button title="Next Step" />
              </div>

              <br />
              <div onClick={handlePrevious} className="mb-2">
                <Button title="Previous Step" />
              </div>
            </form>
            <div className="text-center text-sm mt-4">Step 3</div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h1 className="text-lg font-bold">Recipe Publication</h1>

            <br />
            <p className="mb-2 ">
              <b>Name:</b> {formData.name}
            </p>

            <p className="mb-2 ">
              <b>Servings:</b> {formData.servings}
            </p>
            

            <p className="mb-2 ">
              <b>Description:</b> {formData.description}
            </p>

            <p className="mb-2 ">
              <b>Level:</b> {formData.level}
            </p>


            <p className="mb-2 ">
              <b>Steps:</b>
            </p>
            <ul>
              {formData.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <br />
            <p className="mb-2 ">
              <b>Ingredients:</b>
            </p>
            <ul>
              {formData.ingredients.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>


            <div className="mb-4">
              {formData.picture && (
                <img
                  src={selectedPicture}
                  alt="Selected"
                  className="max-w-xs rounded"
                />
              )}
            </div>
            <div className="mb-4">
              <div onClick={handlePrevious}>
                <Button title="Previous" />
              </div>
              <br />
              <br />

              <form onSubmit={handleSubmit}>
                <button
                  type="submit"
                  className="bg-pastel-blue hover:bg-laurel-green text-white font-medium py-2 px-4 rounded"
                >
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
