import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import success from "/public/assets/success.gif";


export default function AllDone() {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/yourlibrary");
    }, 3000);

      // Clear the timeout if the component is unmounted before the timeout
      return () => clearTimeout(timeout);
    }, []);
  return (
    <div className='flex items-center flex-col h-[50vh] justify-center text-center'>
      <img src={success} alt="" />
      <p className="text-center text-lg font-bold mt-4">
        Congratulations! Your recipe has been successfully published.
      </p>
      <p className="text-center text-sm mt-2">
        You will now be redirected to the library page.
      </p>
    </div>
  )
}
