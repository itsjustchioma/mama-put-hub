import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import React, { useState } from "react";
import { account } from "../services/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Sign up
  const signupUser = async (e) => {
    e.preventDefault();

    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name
    );


    account.createVerification("http://localhost:5173/")
    console.log("Successfully sent");

    promise.then(
      function (response) {
        console.log(response);
        console.log("Successfully created");
        navigate("/login"); //success
      },
      function (error) {
        console.log("Failed, sorry :(");
        console.log(error); //failure
        console.log("Not working");
      }
    );
  };

  return (
    <div className="font-acumin main-container bg-background-color h-[100vh]">
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
            <form className="flex flex-col my-8 " action="#" method="POST">
              <label
                className="block text-sm font-medium text-laurel-green "
                htmlFor="name"
              >
                First Name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                type="text"
                required
                placeholder="Your First Name"
                onChange={(e) => {
                  setUser({
                    ...user,
                    name: e.target.value,
                  });
                }}
                className="mt-1 block w-full h-12 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-laurel-green focus:ring-1 "
              />
              {/* <span className="block text-sm font-medium text-laurel-green ">
                Last Name
              </span>
              <input
                type="text"
                required
                placeholder="Your Last Name"
                className="mt-1 block w-full h-12 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-laurel-green focus:ring-1 "
              /> */}
              <label
                className="block text-sm font-medium text-laurel-green "
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                }}
                required
                placeholder="you@example.com"
                className="mt-1 block w-full h-12 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-laurel-green focus:ring-1"
              />

              <label className="block text-sm font-medium  text-laurel-green ">
                Password
              </label>
              <input
                id="password"
                name="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setUser({
                    ...user,
                    password: e.target.value,
                  });
                }}
                type="password"
                required
                className="mt-1 my-2 h-12 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-laurel-green focus:ring-1
          "
              />
              {/* <span className="block text-sm font-medium  text-laurel-green ">
                Confirm Password
              </span>
              <input
                type="password"
                required
                className="mt-1 my-2 h-12 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-laurel-green focus:ring-1
               
          "
              /> */}

              <div className="flex justify-between  flex-wrap  items-center">
                <div>
                  <input type="checkbox" id="checkbox" />
                  <label>I agree to the terms and conditions</label>
                </div>
                <button
                  className="relative bg-laurel-green py-3 px-6 text-white text-sm flex items-center my-4 w-32 overflow-hidden rounded-md"
                  type="submit"
                  onClick={signupUser}
                >
                  <span className="relative z-10">
                    <span className="wave-on-hover">Sign Up</span>
                  </span>
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
                className="border-2 text-sm py-3 my-4  rounded-lg border-laurel-green text-center"
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
