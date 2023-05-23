import React, { useState } from 'react';
import dummyImage from "/assets/user.png";
import Button from '../components/Button';
import leftarrow from "/assets/left arrow.png";


const LevelTags = [
  { name: "Easy" },
  { name: "Medium" },
  { name: "Like a PRO" },
];

function YourLibrary() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    picture: null,
    name: '',
    password: '',
    address: '',
    level: '',
    count: 0,
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
    console.log('Form submitted:', formData);
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

  return (
    <div className='m-4 h-[90vh] overflow-scroll'>
      <div className="flex justify-between mb-4">
        <button>
          <img src={leftarrow} className="w-4" alt="" />
        </button>

        <button className="text-sm">
          clear all
        </button>
       
      </div>
    <div className=''>
    {step === 1 && (
        <div>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
          <div className='bg-slate-400 w-[70%] mx-auto rounded-lg'>
          {formData.picture ? (
                <img
                  src={URL.createObjectURL(formData.picture)}
                  alt="Selected"
                  className="mx-auto"
                />
              ) : (
                <img
                  src={dummyImage}
                  alt="Dummy"
                  className="mx-auto"
                />
              )}
          </div>
              <label htmlFor="picture" className="block font-medium">
              Upload Picture:
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
              <input type="text" placeholder='for example? smashed potato and chicken' className="border border-gray-300 rounded-md p-2 ml-2 w-80" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <div>
            <label>
              Servings: <br />
              <button type="button" onClick={handleDecrement}>-</button>
              {formData.count}
              <button type="button" onClick={handleIncrement}>+</button>
            </label>
            </div>
         
       
            
            {/* <button >Next</button> */}
<div  onClick={handleNext} > 
<Button title='Next Step'/>

</div>

          </form>
          <div className='text-center text-sm mt-4'>Step 1</div>

        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Account Setup</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Address:
              <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </label>
            <br />
            <label>
              Level:
              <select name="level" value={formData.level} onChange={handleChange}>
                <option value="">Select level</option>
                {LevelTags.map((tag, index) => (
                  <option key={index} value={tag.name}>{tag.name}</option>
                ))}
              </select>
            </label>
            <br />
            <button type="button" onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Step 3: Summary</h2>
          <p>Name: {formData.name}</p>
          <p>Count: {formData.count}</p>
          <p>Address: {formData.address}</p>
          <p>Level: {formData.level}</p>
          <div className="mb-4">
            {formData.picture && (
              <img
                src={URL.createObjectURL(formData.picture)}
                alt="Selected"
                className="max-w-xs rounded"
              />
            )}
          </div>
          <button type="button" onClick={handlePrevious}>Previous</button>
        </div>
      )}
    </div>
    </div>
  );
}

export default YourLibrary;
