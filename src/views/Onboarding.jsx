import React, {useState} from 'react'

export default function Onboarding() {
    const [currentStep, setCurrentStep] = useState(1);


    const handleNext =() => {
        setCurrentStep(currentStep + 1);
    };


    const handlePrevious = () => {
        setCurrentStep(currentStep -1);
    }

    const renderStep = () => {
        switch (currentStep) {
          case 1:
            return <Step1 onNext={handleNext} />;
          case 2:
            return <Step2 onNext={handleNext} onPrevious={handlePrevious} />;
          case 3:
            return <Step3 onPrevious={handlePrevious} />;
          default:
            return null;
        }
      };
    
      return (
        <div className='justify-center items-center flex mt-40 p-4'>
          {renderStep()}
        </div>
      );
    };
    
    const Step1 = ({ onNext }) => {
      return (
        <div>
          <h2>Step 1</h2>
          <h1 className='text-5xl'>Create Your Personal Cookbook</h1>
          <p className='mt-10'>Keep track of your favorite recipes with Cookit. Save and store recipes in your recipe cookbook</p>
          <button onClick={onNext} className='p-4  justify-center m-auto  rounded-full  bg-pastel-blue  mt-4'>Next</button>
        </div>
      );
    };
    
    const Step2 = ({ onNext, onPrevious }) => {
      return (
        <div>
          <h2>Step 2</h2>
          <h1 className='text-5xl'>Shopping List </h1>

          <p className='mt-10'>You can create your own unique recipes and let Mama Put Hub take care of organizing the ingredients you need. Say goodbye to forgetting items at the store and simplify your cooking experience with our convenient shopping list feature.</p>
          <form>
            {/* Form fields */}
          </form>
          <button onClick={onPrevious} className='p-4  justify-center m-auto  rounded-full  bg-pastel-blue  mt-4 mr-4'>Previous</button>
          <button onClick={onNext} className='p-4  justify-center m-auto  rounded-full  bg-pastel-blue  mt-4'>Next</button>
        </div>
      );
    };
    
    const Step3 = ({ onPrevious }) => {
      return (
        <div>
          <h2>Step 3</h2>
          <p  className='text-5xl'>All set! Enjoy using our app.</p>
          <p className='mt-10'>Allow users to share their own recipes with the Mama Put Hub community. Users can upload their recipes, add images, and provide step-by-step instructions</p>
          <button onClick={onPrevious} className='p-4  justify-center m-auto  rounded-full  bg-pastel-blue  mt-4'>Let's get started</button>
        </div>
      );
    };
