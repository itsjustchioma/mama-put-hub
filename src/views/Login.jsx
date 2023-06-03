import Logo from "../components/Logo";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { account } from "../services/appwriteConfig";
// import Homepage from "./Homepage";
// import { handleLogin } from "../App";

// eslint-disable-next-line react/prop-types
export default function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      await account.createEmailSession(user.email, user.password);
      setSuccessMessage("Successfully logged in.");
      setTimeout(() => {
        setSuccessMessage("");
        handleLogin(); // Call the handleLogin function
        navigate("/profile");
      }, 3000);
    } catch (error) {
      setErrorMessage("Wrong email/password.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <div className=" bg-background-color h-[100vh]">
      <div className="wrapper-container grid grid-cols-1  md:grid-cols-2  overflow-hidden">
        <Logo isSignUp={false} />
        {/* 2. FORM CONTAINER */}
        <div className="main-form-container  my-16 mx-auto w-4/5  md:w-3/5">
          <div className="">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-extrabold text-copper-orange">
                Welcome Back!
              </h1>
              <p className="text-text-grey text-center">
                To stay connected with us, please login with your personal info.
              </p>
            </div>

            {/* 3. MAIN FORM  */}
            <form className="flex flex-col my-8  md:my-20 ">
              <span className="block text-sm font-medium text-copper-orange ">
                Email
              </span>
              <input
                type="email"
                required
                placeholder="you@example.com"
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                }}
                className="mt-1 block w-full h-12 my-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-laurel-green focus:ring-1"
              />

              <span className="block text-sm font-medium  text-copper-orange ">
                Password
              </span>
              <input
                type="password"
                required
                onChange={(e) => {
                  setUser({
                    ...user,
                    password: e.target.value,
                  });
                }}
                className="mt-1 my-4 h-12 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-laurel-green focus:ring-1 
          "
              />

              <div className="flex justify-between  items-center  flex-wrap">
                <div>
                  <input type="checkbox" id="checkbox" />
                  <label>I agree to the terms and conditions</label>
                </div>
                <button
                  className="relative bg-copper-orange py-3 px-6 text-white text-sm flex items-center my-4 w-32 overflow-hidden rounded-md"
                  onClick={loginUser}
                >
                  <span className="relative z-10">
                    <span className="wave-on-hover">Log In</span>
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

              <a
                className="text-copper-orange text-center text-sm my-4"
                href="#"
              >
                Forgot password?
              </a>
              <Link to="/">
                <p className="text-text-grey text-center text-sm my-4 underline">
                  Don't have an account? Sign Up.
                </p>
              </Link>
            </form>

            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
