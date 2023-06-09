import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send password reset request to the server
    console.log("Password reset requested for email:", email);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when modal is closed
    }
  }, [showModal]);

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {!showModal ? (
        <div className="bg-white p-8 rounded shadow-md w-full sm:max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Forgot Password
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
            >
              Reset Password
            </button>
          </form>
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-md w-full sm:max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">Email Sent!</h2>
            <p className="text-center">
              Please check your email for further instructions.
            </p>
            <button
              onClick={() => {
                closeModal();
                handleLoginRedirect();
              }}
              className="w-full bg-laurel-green text-white font-bold py-2 px-4 rounded mt-6 focus:outline-none "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordPage;
