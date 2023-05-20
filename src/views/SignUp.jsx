import { Link } from "react-router-dom";
import Logo from "../components/Logo";

// import { useState } from "react";

export default function SignUp() {

  return (
    <div className="font-acumin main-container bg-background-color">
      <div className="wrapper-container grid grid-cols-1    overflow-hidden  md:grid-cols-2">
        {/* 1. IMAGE CONTAINER */}
        <Logo isSignUp={true} />
        {/* 2. FORM CONTAINER */}
        <div className="main-form-container  my-12 mx-auto  w-4/5  md:w-3/5">
          <div className="">
            <div className="flex flex-col items-center  text-center">
              <h1 className="text-4xl font-extrabold text-laurel-green">
                Welcome!
              </h1>
              <p className="text-text-grey text-center">
                To stay connected with us, please sign up with your personal
                info.
              </p>
            </div>

            {/* 3. MAIN FORM  */}
            <form className="flex flex-col my-8 ">
              <span className="block text-sm font-medium text-laurel-green ">
                First Name
              </span>
              <input
                type="text"
                required
                placeholder="Your First Name"
                className="mt-1 block w-full h-12 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-laurel-green focus:ring-1 "
              />
              <span className="block text-sm font-medium text-laurel-green ">
                Last Name
              </span>
              <input
                type="text"
                required
                placeholder="Your Last Name"
                className="mt-1 block w-full h-12 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-laurel-green focus:ring-1 "
              />
              <span className="block text-sm font-medium text-laurel-green ">
                Email
              </span>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 block w-full h-12 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-laurel-green focus:ring-1"
              />

              <span className="block text-sm font-medium  text-laurel-green ">
                Password
              </span>
              <input
                type="password"
                required
                className="mt-1 my-2 h-12 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-laurel-green focus:ring-1
          "
              />
              <span className="block text-sm font-medium  text-laurel-green ">
                Confirm Password
              </span>
              <input
                type="password"
                required
                className="mt-1 my-2 h-12 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-laurel-green focus:ring-1
               
          "
              />

              <div className="flex justify-between  flex-wrap  items-center">
                <div>
                  <input type="checkbox" id="checkbox" />
                  <label>I agree to the terms and conditions</label>
                </div>
                <button className="rounded-md bg-medium-blue py-3 px-5 text-white text-sm flex items-center my-4  w-32">
                  Sign Up!
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 15L10 10L6 5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <Link
                to="/Login"
                className="border-2 text-sm py-3  rounded-lg border-laurel-green text-center"
              >
                <button className="text-laurel-green">
                  Already have an account? Log in.
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
